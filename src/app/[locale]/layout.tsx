import { VisitorCount } from '@/features/visitorCount/components/VisitorCount'
import { routing } from '@/i18n/routing'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { SEO } from '@/shared/_constants/SEO'
import { Footer } from '@/shared/components/footer/Footer'
import { Header } from '@/shared/components/Header'
import { Toaster } from '@/shared/components/ui/sonner'
import { env } from '@/shared/lib/env'
import { Providers } from '@/shared/providers'
import { cn } from '@/shared/utils/tailwind'
import { Metadata } from 'next'
import { hasLocale, NextIntlClientProvider } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Galada, Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'
import '../globals.css'

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

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
    title: {
      default: `${ESTABLISHMENT_TITLE} | ${SEO.home.title}`,
      template: `%s - ${ESTABLISHMENT_TITLE}`
    },
    alternates: {
      canonical: new URL(`/${locale}`, env.NEXT_PUBLIC_BASE_URL),
      languages: {
        fr: '/fr',
        en: '/en'
      }
    },
    description: SEO.home.description,
    openGraph: {
      title: `${SEO.home.documentTitle} - ${ESTABLISHMENT_TITLE}`,
      description: SEO.home.description,
      type: 'website',
      locale,
      url: env.NEXT_PUBLIC_BASE_URL,
      siteName: ESTABLISHMENT_TITLE
    }
  }
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  // Ensure that the incoming `locale` is valid
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  // Enable static rendering
  setRequestLocale(locale)

  // suppressHydrationWarning useful because next-themes trigger an error with: attribute='class'
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(fontPrimary.variable, fontSecondary.variable)}>
        <div className='relative font-primary min-h-svh flex flex-col antialiased'>
          <NextIntlClientProvider>
            <Providers>
              <Header />
              <main id='main' role='main' className='flex-1 flex'>
                {children}
              </main>
              <Footer />
            </Providers>
          </NextIntlClientProvider>
          <Toaster richColors position='top-right' expand={true} />

          {/* update visitor count */}
          {process.env.ENABLE_VISITOR_COUNT === 'true' && <VisitorCount />}
        </div>
      </body>
    </html>
  )
}
