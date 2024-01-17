import { notFound } from 'next/navigation'
import { getRequestConfig } from 'next-intl/server'
import { env } from './lib/env'

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!env.NEXT_PUBLIC_LANGS.includes(locale)) notFound()

  return {
    messages: (await import(`../messages/${locale}.json`)).default
  }
})
