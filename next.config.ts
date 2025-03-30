import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
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

const withNextIntl = createNextIntlPlugin('./src/features/i18n/request.ts')
export default withNextIntl(nextConfig)
