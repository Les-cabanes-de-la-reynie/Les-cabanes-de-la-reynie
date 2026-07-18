import { getPathname } from '@/i18n/navigation'
import { Locale, locales, routing } from '@/i18n/routing'
import { env } from '@/shared/lib/env'

export type LocalizedHref = Parameters<typeof getPathname>[0]['href']

// Absolute URL using the locale's real (translated) pathname
export const localizedUrl = (locale: string, href: LocalizedHref) =>
  `${env.NEXT_PUBLIC_BASE_URL}${getPathname({ locale: locale as Locale, href })}`

export const pageAlternates = (locale: string, href: LocalizedHref) => ({
  canonical: localizedUrl(locale, href),
  languages: {
    ...Object.fromEntries(locales.map(l => [l, localizedUrl(l, href)])),
    'x-default': localizedUrl(routing.defaultLocale, href)
  }
})
