import { locales, routing } from '@/i18n/routing'
import { LocalizedHref, localizedUrl } from '@/shared/lib/seo'
import { MetadataRoute } from 'next'

type RouteConfig = {
  href: LocalizedHref
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const routes: RouteConfig[] = [
    { href: '/', priority: 1, changeFrequency: 'monthly' },
    { href: '/logements/yourte', priority: 0.8, changeFrequency: 'monthly' },
    { href: '/logements/cabane', priority: 0.8, changeFrequency: 'monthly' },
    { href: '/contact', priority: 0.7, changeFrequency: 'yearly' },
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
