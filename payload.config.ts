import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
// import Study from './collections/Study';
import Category from './collections/Category';
import MegaMenu from './globals/MegaMenu';
import SocialMedia from './globals/SocialMedia';
import Footer from './globals/Footer';
import FormBuilder from '@payloadcms/plugin-form-builder';


dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    // Study,
    Category,
    Media,

  ],
  globals: [
    MegaMenu,
    SocialMedia,
    Footer,
  ],
  plugins: [
    FormBuilder({
      fields:{
        payment:false,
      }
    })
  ]
});
