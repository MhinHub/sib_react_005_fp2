/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // experimental: { appDir: true },
  images: {
    domains: ["fakestoreapi.com"],
  },
};

module.exports = nextConfig;
