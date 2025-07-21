import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 's.gravatar.com'
      // },
      {
        protocol: 'https',
        hostname: 'conti9s7l7.ufs.sh'
      }
    ]
  }
}

const withNextIntl = createNextIntlPlugin('./src/features/i18n/request.ts')
export default withNextIntl(nextConfig)
