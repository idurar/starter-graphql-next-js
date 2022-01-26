/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};

// next.config.js
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // modifyVars: { '@primary-color': '#666' }, // optional
  lessVarsFilePath: './styles/app.less', // optional
  // lessVarsFilePathAppendToEndOfContent: false, // optional
  // // optional https://github.com/webpack-contrib/css-loader#object
  // cssLoaderOptions: {
  //   // ...
  //   mode: 'local',
  //   exportLocalsConvention: 'camelCase',
  //   exportOnlyLocals: false,
  //   // ...
  //   getLocalIdent: (context, localIdentName, localName, options) => {
  //     return 'whatever_random_class_name';
  //   },
  // },

  // // // for Next.js ONLY
  // nextjs: {
  //   localIdentNameFollowDev: true, // default false, for easy to debug on PROD mode
  // },

  // Other Config Here...

  webpack(config) {
    return config;
  },
});
