import { env } from '@/shared/lib/env'
import { MetadataRoute } from 'next'

const locales = ['fr', 'en']

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = env.NEXT_PUBLIC_BASE_URL

  const routes = [
    { path: '', priority: 1 },
    { path: '/logements/yourte', priority: 0.8 },
    { path: '/logements/cabane', priority: 0.8 },
    { path: '/contact', priority: 0.7 },
    { path: '/activites', priority: 0.5 },
    { path: '/activites/1', priority: 0.5 },
    { path: '/activites/2', priority: 0.5 },
    { path: '/activites/3', priority: 0.5 }
  ]

  return locales.flatMap(locale =>
    routes.map(({ path, priority }) => ({
      url: `${baseUrl}/${locale}${path}`,
      priority
    }))
  )
}
