/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "www.kasradesign.com"
      }
    ]
  }
}

module.exports = nextConfig
