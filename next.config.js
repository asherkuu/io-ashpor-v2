const { i18n } = require("./next-i18next.config");
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mongodburl:
      "mongodb+srv://portrolio-user:QiwpR5rvboh0Hw7s@cluster0.qmfoa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  },
  images: {
    domains: ["stylefitbucket.s3.ap-northeast-2.amazonaws.com"],
  },
};

module.exports = nextConfig;
