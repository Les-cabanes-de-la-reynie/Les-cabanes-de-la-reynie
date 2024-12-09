const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin('./src/features/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.gravatar.com'
      },
      {
        protocol: 'https',
        hostname: 'utfs.io'
      }
    ]
  }
}

module.exports = withNextIntl(nextConfig)
