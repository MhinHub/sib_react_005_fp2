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
};


module.exports = nextConfig;
