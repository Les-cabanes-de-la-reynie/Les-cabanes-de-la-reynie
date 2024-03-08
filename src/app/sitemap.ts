import { env } from '@/lib/env'
import { MetadataRoute } from 'next'

type SitemapType = {
  location: string
  priority: number
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL
  const locales = env.NEXT_PUBLIC_LANGS

  const sitemapWithLocale: SitemapType[] = []

  for (const locale of locales) {
    sitemapWithLocale.push({ location: locale, priority: 1 })
    sitemapWithLocale.push({
      location: `${locale}/logements/yourte`,
      priority: 0.9
    })
    sitemapWithLocale.push({
      location: `${locale}/logements/cabane`,
      priority: 0.9
    })
    sitemapWithLocale.push({ location: `${locale}/contact`, priority: 0.8 })
    sitemapWithLocale.push({ location: `${locale}/activites`, priority: 0.5 })
  }

  return sitemapWithLocale.map(({ location, priority }) => ({
    url: `${baseUrl}/${location}`,
    lastModified: new Date(),
    priority
  }))
}
