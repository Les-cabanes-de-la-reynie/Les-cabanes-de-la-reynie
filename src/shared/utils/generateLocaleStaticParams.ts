import { routing } from '@/i18n/routing'

export function generateLocaleStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}
