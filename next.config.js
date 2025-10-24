/** @type {import('next').NextConfig} */
const nextConfig = {
  // ❌ remove: output: 'export',  // static export disables API routes
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true }, // fine to keep
};

module.exports = nextConfig;
