/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()

const config = {
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

module.exports = withNextIntl(config)
