import { getSessionCookie } from 'better-auth/cookies'
import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'
import { PAGE_ROUTES } from './shared/_constants/page'

const intlMiddleware = createIntlMiddleware(routing)

export default async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Handle admin authentication
  const sessionCookie = getSessionCookie(request, {})

  // Check if it's an admin route (with or without locale prefix)
  const isAdminSignIn =
    pathname.includes(PAGE_ROUTES.admin.signIn) ||
    pathname.endsWith('/admin/auth/sign-in')
  const isAdminHome =
    pathname.endsWith('/admin') || pathname.match(/\/[a-z]{2}\/admin$/)

  if (isAdminSignIn && sessionCookie) {
    const locale = pathname.split('/')[1]
    
    const redirectUrl =
      locale && routing.locales.includes(locale as 'fr' | 'en')
        ? `/${locale}${PAGE_ROUTES.admin.home}`
        : PAGE_ROUTES.admin.home
    return NextResponse.redirect(new URL(redirectUrl, request.url))
  }

  if (isAdminHome && !sessionCookie) {
    const locale = pathname.split('/')[1]
    const redirectUrl =
      locale && routing.locales.includes(locale as 'fr' | 'en')
        ? `/${locale}${PAGE_ROUTES.admin.signIn}`
        : PAGE_ROUTES.admin.signIn
    return NextResponse.redirect(new URL(redirectUrl, request.url))
  }

  // Handle internationalization
  return intlMiddleware(request)
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}
