import createMiddleware from 'next-intl/middleware'
import { pathnames, locales } from './config'
import { env } from './lib/env'

export default createMiddleware({
  defaultLocale: env.NEXT_PUBLIC_LANG,
  locales,
  pathnames
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*']
}
