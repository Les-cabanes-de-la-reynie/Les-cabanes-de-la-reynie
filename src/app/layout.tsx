import { routing } from '@/i18n/routing'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { SEO } from '@/shared/_constants/SEO'
import { env } from '@/shared/lib/env'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: `${ESTABLISHMENT_TITLE} | ${SEO.home.title}`,
    template: `%s - ${ESTABLISHMENT_TITLE}`
  },
  alternates: { canonical: new URL(env.NEXT_PUBLIC_BASE_URL) },
  description: SEO.home.description,
  openGraph: {
    title: `${SEO.home.documentTitle} - ${ESTABLISHMENT_TITLE}`,
    description: SEO.home.description,
    type: 'website',
    locale: routing.defaultLocale,
    url: env.NEXT_PUBLIC_BASE_URL,
    siteName: ESTABLISHMENT_TITLE
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
