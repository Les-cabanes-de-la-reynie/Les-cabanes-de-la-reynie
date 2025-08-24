import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // images from uploadthings
      {
        protocol: 'https',
        hostname: 'conti9s7l7.ufs.sh'
      }
    ]
  },
  experimental: {
    optimizePackageImports: ['lucide-react']
  }
}

const withNextIntl = createNextIntlPlugin('./src/features/i18n/request.ts')
export default withNextIntl(nextConfig)
