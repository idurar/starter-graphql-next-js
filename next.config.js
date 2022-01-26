/** @type {import('next').NextConfig} */
const path = require('path');
module.exports = {
  reactStrictMode: true,
};

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};
