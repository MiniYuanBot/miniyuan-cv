/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict mode for a better development experience
  reactStrictMode: true,

  // The only raster asset is the portrait in /public; serve it as-is
  // (no runtime image optimizer dependency needed on self-hosted servers)
  images: {
    unoptimized: true,
  },

  // Compress output
  compress: true,

  // Remove the X-Powered-By header
  poweredByHeader: false,
};

module.exports = nextConfig;
