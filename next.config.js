/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['dmeo.gov.in'],
  },
}

module.exports = nextConfig
