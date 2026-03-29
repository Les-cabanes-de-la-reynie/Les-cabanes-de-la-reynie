import { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [40, 50, 75],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 400],
    deviceSizes: [480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    remotePatterns: [
      // images from uploadthings
      {
        protocol: 'https',
        hostname: 'conti9s7l7.ufs.sh'
      }
    ]
  },
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-label',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-separator',
      '@radix-ui/react-slot',
      '@radix-ui/react-tabs',
      '@radix-ui/react-tooltip',
      '@radix-ui/react-visually-hidden'
    ]
  }
}

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts')
export default withNextIntl(nextConfig)
