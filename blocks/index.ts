import Content from './Content/Component';
import Price from './PriceBlock/Component';
import Spacer from './Spacer/Component';
import Statistics from './Statistics/Component';
import Image from './Image/Component';
import ImageContentCollage from './ImageContentCollage/Component';
// import StudySlider from './StudySlider/Component';
import StickyContent from './StickyContent/Component';
import Slider from './Slider/Component';
import CallToAction from './CallToAction/Component';
import AltGrid from './AltGrid/Component';
import ImageGrid from './ImageGrid/Component';
import ImageCollage from './ImageCollage/Component';
import ImageStatCollage from './ImageStatCollage/Component';
import CTAGrid from './CTAGrid/Component';
import LogoGrid from './LogoGrid/Component';
import { FormBlock } from './Form/index';

export const components = {
  'call-to-action': CallToAction,
  'cta-grid': CTAGrid,
  content: Content,
  price:Price,
  spacer: Spacer,
  statistics: Statistics,
  image: Image,
  'form-Block': FormBlock,
  'Image-collage': ImageCollage,
  'Image-content-collage': ImageContentCollage,
  'Image-grid': ImageGrid,
  'Alt-grid': AltGrid,
  'Logo-grid': LogoGrid,
  'Image-stat-collage': ImageStatCollage,
  // 'study-slider': StudySlider,
  'sticky-content': StickyContent,
  slider: Slider,
};
