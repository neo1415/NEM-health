require('dotenv').config();
// const { sizes } = require('./blocks/Image/sizes.json');

module.exports = {
  publicRuntimeConfig: {
    SERVER_URL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  },
  images: {
    domains: [
      'localhost',
      'https://nem-health.netlify.app/',

      // Your domain(s) here
    ],
    // deviceSizes: sizes,
  },
  // webpack: (config) => {
  //   config.module.rules.push({
  //     test: /\.scss$/,
  //     use: [
  //       'style-loader',
  //       'css-loader',
  //       'sass-loader',
  //     ],
  //     include: path.resolve(__dirname, 'scss'), // Path to your global SCSS files
  //   });

  //   return config;
  // },
};
