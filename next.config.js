/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: { appDir: true },
  images: {
    domains: ["fakestoreapi.com"],
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      debug: /webpack\.config\.js/,
    };
    return config;
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

const prod = process.env.NODE_ENV === 'production'

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: prod ? false : true,
})

module.exports = withPWA(nextConfig);
