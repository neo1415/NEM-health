import { Block } from 'payload/types';
import richText from './fields/richText';
import link, { Type as LinkType } from '../../fields/link';

export type Icon = 'none' | 'arrow';

export type Action = {
  headline: string
  icon?: Icon
  link: LinkType
}

export type Type = {
  actions: Action[]
  blockType: 'formBlock'
}

export const FormBlock: Block = {
  slug: 'formBlock',
  labels: {
    singular: 'Form Block',
    plural: 'Form Blocks',
  },
  graphQL: {
    singularName: 'FormBlock',
  },
  fields: [
    {
      name: 'form',
      type: 'relationship',
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'enableIntro',
      label: 'Enable Intro Content',
      type: 'checkbox',
    },
    richText({
      name: 'introContent',
      label: 'Intro Content',
      admin: {
        condition: (_, { enableIntro }) => Boolean(enableIntro),
      },
    }),
  ],
};
