/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    formats: ["image/avif", "image/webp"],
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  i18n: {
    locales: ["pt", "en"],
    defaultLocale: "en",
  },
  trailingSlash: false,
};

module.exports = nextConfig;