/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Optimize for Vercel free tier
  compress: true,
  swcMinify: true,
  poweredByHeader: false,
}

module.exports = nextConfig
