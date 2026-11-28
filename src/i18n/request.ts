import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'
import { notFound } from 'next/navigation'
import * as rootParams from 'next/root-params'
import { routing } from './routing'

export default getRequestConfig(async ({ locale }) => {
  // Server Actions and Route Handlers have no root params: they pass the locale
  if (!locale) {
    const param = await rootParams.locale()

    if (!hasLocale(routing.locales, param)) {
      notFound()
    }

    locale = param
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  }
})
