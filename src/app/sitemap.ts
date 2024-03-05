import { env } from '@/lib/env'
import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL

  const frenchPages = [
    { location: 'fr', priority: 1 },
    { location: 'fr/logements/yourte', priority: 0.9 },
    { location: 'fr/logements/cabane', priority: 0.9 },
    { location: 'fr/contact', priority: 0.8 },
    { location: 'fr/activites', priority: 0.5 }
  ]
  const englishPages = [
    { location: 'en', priority: 1 },
    { location: 'en/logements/yourte', priority: 0.9 },
    { location: 'en/logements/cabane', priority: 0.9 },
    { location: 'en/contact', priority: 0.8 },
    { location: 'en/activites', priority: 0.5 }
  ]

  const urls = [...frenchPages, ...englishPages]

  return urls.map(({ location, priority }) => ({
    url: `${baseUrl}/${location}`,
    lastModified: new Date(),
    priority
  }))
}
