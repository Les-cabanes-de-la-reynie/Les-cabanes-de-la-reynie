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
import { hasLocale } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'
import { Galada, Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'

const fontPrimary = Roboto({
  variable: '--font-primary',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true,
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
    alternates: {
      canonical: new URL(`/${locale}`, env.NEXT_PUBLIC_BASE_URL),
      languages: {
        fr: '/fr',
        en: '/en'
      }
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: ESTABLISHMENT_TITLE,
    description: SEO.home.description,
    url: env.NEXT_PUBLIC_BASE_URL,
    image: `${env.NEXT_PUBLIC_BASE_URL}/yurt.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Corrèze',
      addressCountry: 'FR'
    }
  }

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn(fontPrimary.variable, fontSecondary.variable)}>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className='relative font-primary min-h-svh flex flex-col antialiased'>
          <Providers>
            <Header />
            <main id='main' role='main' className='flex-1 flex'>
              {children}
            </main>
            <Footer />
          </Providers>
          <Toaster richColors position='top-right' expand={true} />
        </div>
      </body>
    </html>
  )
}
