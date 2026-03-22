import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { env } from '@/shared/lib/env'
import { Metadata, Viewport } from 'next'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#082d2a'
}

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
  title: {
    default: ESTABLISHMENT_TITLE,
    template: `%s - ${ESTABLISHMENT_TITLE}`
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
