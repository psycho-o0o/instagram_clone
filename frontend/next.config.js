/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  i18n,
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        destination: process.env.DESTINATION_URL,
        source: process.env.SOURCE_PATH,
      },
    ];
  },
};

module.exports = nextConfig;
