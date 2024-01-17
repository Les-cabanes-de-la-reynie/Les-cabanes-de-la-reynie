import createMiddleware from 'next-intl/middleware'
import { env } from './lib/env'

export default createMiddleware({
  locales: env.NEXT_PUBLIC_LANGS,

  // Used when no locale matches
  defaultLocale: env.NEXT_PUBLIC_LANG
})

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(fr|en)/:path*']
}
