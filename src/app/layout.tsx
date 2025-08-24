import { defaultLocale } from '@/features/i18n/config'
import { VisitorCount } from '@/features/visitorCount/VisitorCount'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { SEO } from '@/shared/_constants/SEO'
import { Footer } from '@/shared/components/footer/Footer'
import { Header } from '@/shared/components/Header'
import { Toaster } from '@/shared/components/ui/sonner'
import { env } from '@/shared/lib/env'
import { Providers } from '@/shared/providers'
import { cn } from '@/shared/utils/tailwind'
import { Metadata } from 'next'
import { getLocale } from 'next-intl/server'
import { Galada, Roboto } from 'next/font/google'
import './globals.css'

const fontPrimary = Roboto({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'arial']
})

const fontSecondary = Galada({
  variable: '--font-secondary',
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  fallback: ['cursive', 'system-ui']
})

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
    locale: defaultLocale,
    url: env.NEXT_PUBLIC_BASE_URL,
    siteName: ESTABLISHMENT_TITLE
  }
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()

  // suppressHydrationWarning useful because next-themes trigger an error with: attribute='class'
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(fontPrimary.variable, fontSecondary.variable)}>
        <div className='relative font-primary min-h-svh flex flex-col antialiased'>
          <Providers>
            <Header />
            <main id='main' role='main' className='flex-1 flex'>
              {children}
            </main>
            <Footer />
          </Providers>
          <Toaster richColors position='top-right' expand={true} />

          {/* update visitor count */}
          <VisitorCount />
        </div>
      </body>
    </html>
  )
}
