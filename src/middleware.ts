import { getSessionCookie } from 'better-auth/cookies'
import { NextRequest, NextResponse } from 'next/server'
import { PAGE_ROUTES } from './shared/_constants/page'

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request, {})

  if (request.nextUrl.pathname === PAGE_ROUTES.admin.signIn && sessionCookie) {
    return NextResponse.redirect(new URL(PAGE_ROUTES.admin.home, request.url))
  }

  if (request.nextUrl.pathname === PAGE_ROUTES.admin.home && !sessionCookie) {
    return NextResponse.redirect(new URL(PAGE_ROUTES.admin.signIn, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [PAGE_ROUTES.admin.home, PAGE_ROUTES.admin.signIn]
}
