import { getSessionCookie } from 'better-auth/cookies'
import createIntlMiddleware from 'next-intl/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { routing } from './i18n/routing'
import { PAGE_ROUTES } from './shared/_constants/page'

const intlMiddleware = createIntlMiddleware(routing)

function stripLocale(pathname: string): string {
  const localePrefix = routing.locales
    .map(l => `/${l}`)
    .find(p => pathname === p || pathname.startsWith(`${p}/`))

  return localePrefix ? pathname.slice(localePrefix.length) || '/' : pathname
}

function getLocalePrefix(pathname: string): string {
  const locale = pathname.split('/')[1]
  return routing.locales.includes(locale as (typeof routing.locales)[number])
    ? `/${locale}`
    : ''
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const normalizedPath = stripLocale(pathname)
  const sessionCookie = getSessionCookie(request)

  const isAdminRoute = normalizedPath.startsWith('/admin')
  const isAdminAuthRoute = normalizedPath.startsWith(PAGE_ROUTES.admin.signIn)

  // Pas connecté → bloquer toutes les routes /admin/** sauf /admin/auth/**
  if (isAdminRoute && !isAdminAuthRoute && !sessionCookie) {
    const localePrefix = getLocalePrefix(pathname)
    return NextResponse.redirect(
      new URL(`${localePrefix}${PAGE_ROUTES.admin.signIn}`, request.url)
    )
  }

  // Déjà connecté → ne pas afficher la page sign-in
  if (isAdminAuthRoute && sessionCookie) {
    const localePrefix = getLocalePrefix(pathname)
    return NextResponse.redirect(
      new URL(`${localePrefix}${PAGE_ROUTES.admin.home}`, request.url)
    )
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
}
