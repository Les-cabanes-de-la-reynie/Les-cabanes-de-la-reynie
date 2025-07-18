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
import localFont from 'next/font/local'
import './globals.css'

const fontPrimary = localFont({
  variable: '--font-primary',
  src: [
    {
      path: '../assets/fonts/Roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Roboto/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Roboto/Roboto-Black.ttf',
      weight: '900',
      style: 'normal'
    }
  ],
  display: 'swap',
  preload: true
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
    <html suppressHydrationWarning lang={locale}>
      <body className={cn(fontPrimary.variable)}>
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
