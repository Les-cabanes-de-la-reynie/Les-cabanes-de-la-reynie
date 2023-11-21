/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')()

const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com'
      },
      {
        protocol: 'https',
        hostname: 's.gravatar.com'
      }
    ]
  }
}

module.exports = withNextIntl(config)
