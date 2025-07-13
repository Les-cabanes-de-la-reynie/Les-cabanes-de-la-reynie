import { PAGE_ROUTES } from '@/shared/_constants/page'
import { env } from '@/shared/lib/env'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: PAGE_ROUTES.home,
      disallow: PAGE_ROUTES.admin.home
    },
    sitemap: `${env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
  }
}
