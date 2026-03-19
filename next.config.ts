import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [50, 75],
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

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')
export default withNextIntl(nextConfig)
