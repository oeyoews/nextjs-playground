/** @type {import('next').NextConfig} */
const nextConfig = {
  crossOrigin: 'anonymous',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: '**',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
