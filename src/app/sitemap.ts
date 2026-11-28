import { locales, routing } from '@/i18n/routing'
import { LocalizedHref, localizedUrl } from '@/shared/lib/seo'
import { MetadataRoute } from 'next'
import { cacheLife } from 'next/cache'

type RouteConfig = {
  href: LocalizedHref
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}

// Cached: a bare new Date() would make the sitemap render per request
const getLastModified = async () => {
  'use cache'
  cacheLife('days')

  return new Date()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = await getLastModified()

  const routes: RouteConfig[] = [
    { href: '/', priority: 1, changeFrequency: 'monthly' },
    { href: '/logements/yourte', priority: 0.8, changeFrequency: 'monthly' },
    { href: '/logements/cabane', priority: 0.8, changeFrequency: 'monthly' },
    { href: '/nous-trouver', priority: 0.7, changeFrequency: 'yearly' },
    { href: '/activites', priority: 0.5, changeFrequency: 'monthly' },
    { href: '/activites/1', priority: 0.5, changeFrequency: 'monthly' },
    { href: '/activites/2', priority: 0.5, changeFrequency: 'monthly' },
    { href: '/activites/3', priority: 0.5, changeFrequency: 'monthly' }
  ]

  return locales.flatMap(locale =>
    routes.map(({ href, priority, changeFrequency }) => ({
      url: localizedUrl(locale, href),
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          ...Object.fromEntries(locales.map(l => [l, localizedUrl(l, href)])),
          'x-default': localizedUrl(routing.defaultLocale, href)
        }
      }
    }))
  )
}
