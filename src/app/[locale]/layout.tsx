import { routing } from '@/i18n/routing'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { Footer } from '@/shared/components/footer/Footer'
import { Header } from '@/shared/components/Header'
import { Toaster } from '@/shared/components/ui/sonner'
import { env } from '@/shared/lib/env'
import { pageAlternates } from '@/shared/lib/seo'
import { Providers } from '@/shared/providers'
import { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { Source_Sans_3 } from 'next/font/google'
import { notFound } from 'next/navigation'

const fontPrimary = Source_Sans_3({
  variable: '--font-primary',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
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
    alternates: pageAlternates(locale, '/')
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

  const tSEO = await getTranslations('SEO')

  // suppressHydrationWarning useful because next-themes trigger an error with: attribute='class'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: ESTABLISHMENT_TITLE,
    description: tSEO('home.description'),
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
      <body className={fontPrimary.variable}>
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
