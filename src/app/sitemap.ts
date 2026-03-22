import { env } from '@/shared/lib/env'
import { MetadataRoute } from 'next'

const locales = ['fr', 'en']

type RouteConfig = {
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL
  const lastModified = new Date()

  const routes: RouteConfig[] = [
    { path: '', priority: 1, changeFrequency: 'monthly' },
    { path: '/logements/yourte', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/logements/cabane', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
    { path: '/activites', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/activites/1', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/activites/2', priority: 0.5, changeFrequency: 'monthly' },
    { path: '/activites/3', priority: 0.5, changeFrequency: 'monthly' }
  ]

  return locales.flatMap(locale =>
    routes.map(({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map(l => [l, `${baseUrl}/${l}${path}`])
        )
      }
    }))
  )
}
