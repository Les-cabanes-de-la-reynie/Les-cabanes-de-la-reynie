import { getSessionCookie } from 'better-auth/cookies'
import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const sessionCookie = getSessionCookie(request, {})

  if (request.nextUrl.pathname === '/sign-in' && sessionCookie) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }

  if (!sessionCookie && request.nextUrl.pathname === '/admin') {
    return NextResponse.redirect(new URL('/sign-in', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/sign-in']
}
