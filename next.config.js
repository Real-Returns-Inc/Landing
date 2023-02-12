const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    "unoptimized": true,
  },
  assetPrefix: isProd ? '/Landing/' : '',
}

module.exports = nextConfig
