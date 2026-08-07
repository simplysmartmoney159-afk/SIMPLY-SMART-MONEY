/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  
  images: {
    unoptimized: false,
    domains: ['images.unsplash.com'],
    formats: ['image/avif', 'image/webp'],
  },

  async redirects() {
    return [
      {
        source: '/blog/index',
        destination: '/blog',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
