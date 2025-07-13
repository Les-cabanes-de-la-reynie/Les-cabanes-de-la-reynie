import { env } from '@/shared/lib/env'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1
    },
    {
      url: `${baseUrl}/logements/yourte`,
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: `${baseUrl}/logements/cabane`,
      lastModified: new Date(),
      priority: 0.8
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.7
    },
    {
      url: `${baseUrl}/activites`,
      lastModified: new Date(),
      priority: 0.5
    }
  ]
}
