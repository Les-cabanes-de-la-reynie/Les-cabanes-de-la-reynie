import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { SEO } from '@/_constants/SEO'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/Header'
import { Toaster } from '@/components/ui/sonner'
import { defaultLocale } from '@/features/i18n/config'
import { VisitorCount } from '@/features/visitorCount/VisitorCount'
import { env } from '@/lib/env'
import { Providers } from '@/providers'
import { cn } from '@/utils/tailwind'
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
      path: '../assets/fonts/Roboto/Roboto-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../assets/fonts/Roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Roboto/Roboto-MediumItalic.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../assets/fonts/Roboto/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Roboto/Roboto-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../assets/fonts/Roboto/Roboto-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../assets/fonts/Roboto/Roboto-BlackItalic.ttf',
      weight: '900',
      style: 'italic'
    }
  ]
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
      <body
        className={cn(
          fontPrimary.variable,
          'text:foreground relative flex min-h-screen w-full flex-col bg-background font-primary'
        )}
      >
        <Providers locale={locale}>
          <Header />
          <main id='main' role='main' className='flex flex-1'>
            {children}
          </main>
          <Footer />
        </Providers>
        <Toaster richColors position='top-right' expand={true} />

        {/* Increment visit counter */}
        <VisitorCount />
      </body>
    </html>
  )
}
