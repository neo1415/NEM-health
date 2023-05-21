import { CollectionConfig } from 'payload/types';
import { Type as MediaType } from './Media';
import slug from '../fields/slug';
import meta, { Type as MetaType } from '../fields/meta';
import { Content, Type as ContentType } from '../blocks/Content';
import { Price, Type as PriceType } from '../blocks/PriceBlock';
import { Image, Type as ImageBlockType } from '../blocks/Image';
import Statistics, { Type as StatisticsType } from '../blocks/Statistics';
import Spacer, { Type as SpacerType } from '../blocks/Spacer';
import ImageContentCollage, { Type as ImageContentCollageType } from '../blocks/ImageContentCollage';
import StickyContent, { Type as StickyContentType } from '../blocks/StickyContent';
import CallToAction, { Type as CallToActionType } from '../blocks/CallToAction';
import Slider, { Type as SliderType } from '../blocks/Slider';
import ImageStatCollage, { Type as ImageStatCollageType } from '../blocks/ImageStatCollage';
import ImageGrid, { Type as ImageGridType } from '../blocks/ImageGrid';
import AltGrid, { Type as AltGridType } from '../blocks/AltGrid';
import LogoGrid, { Type as LogoGridType } from '../blocks/LogoGrid';
import ImageCollage, { Type as ImageCollageType } from '../blocks/ImageCollage';
import StudySlider, { Type as StudySliderType } from '../blocks/StudySlider';
import CTAGrid, { Type as CTAGridType } from '../blocks/CTAGrid';
import RedHeadline from '../components/RichText/leaves/RedHeadline';
import RedUnderline from '../components/RichText/leaves/RedUnderline';
import { FormBlock } from '../blocks/Form';



export type Layout =
CallToActionType
| ContentType
| PriceType
// | FormBlockType
| CTAGridType
| ImageBlockType
| ImageCollageType
| ImageContentCollageType
| ImageGridType
| ImageGridType
| AltGridType
| LogoGridType
| ImageStatCollageType
| SliderType
| SpacerType
| StatisticsType
| StickyContentType
| StudySliderType

export type HeroType = 'minimal' | 'contentAboveImage' | 'contentLeftOfImage'


  export type Type = {
    title: string
    heroType: 'minimal' | 'contentAboveImage' | 'contentLeftOfImage'
    heroContent: unknown
    heroImage?: MediaType
    slug: string
    image?: MediaType
    layout: Layout[]
    meta: MetaType
  }

  

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: (): boolean => true, // Everyone can read Pages
  },
  fields: [
    {
      name: 'title',
      label: 'Page Title',
      type: 'text',
      required: true,
    },
    {
      type: 'radio',
      name: 'heroType',
      label: 'Hero Type',
      required: true,
      defaultValue: 'minimal',
      options: [
        {
          label: 'Minimal',
          value: 'minimal',
        },
        {
          label: 'Content Above Image',
          value: 'contentAboveImage',
        },
        {
          label: 'Content Left of Image',
          value: 'contentLeftOfImage',
        },
      ],
    },
    {
      name: 'heroContent',
      label: 'Hero Content',
      type: 'richText',
      required: true,
      admin:{
        leaves:[
          RedHeadline,
          RedUnderline,
        ]
      }
    },
    {
      name: 'heroImage',
      label: 'Hero Image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, siblingData) => siblingData?.heroType === 'contentAboveImage' || siblingData?.heroType === 'contentLeftOfImage',
      },
    },
    {
      name: 'layout',
      label: 'Page Layout',
      type: 'blocks',
      minRows: 1,
      blocks: [
        CallToAction,
        Content,
        Price,
        CTAGrid,
        FormBlock,
        Image,
        ImageCollage,
        ImageContentCollage,
        ImageGrid,
        AltGrid,
        LogoGrid,
        ImageStatCollage,
        Slider,
        Spacer,
        Statistics,
        StickyContent,
        StudySlider,
      ],
    },
    meta,
    slug,
  ],
};

export default Page;
