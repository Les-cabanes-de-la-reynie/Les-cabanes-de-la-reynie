import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { Footer } from '@/shared/components/footer/Footer'
import { Header } from '@/shared/components/Header'
import { Toaster } from '@/shared/components/ui/sonner'
import { env } from '@/shared/lib/env'
import { pageAlternates } from '@/shared/lib/seo'
import { Providers } from '@/shared/providers'
import { generateLocaleStaticParams } from '@/shared/utils/generateLocaleStaticParams'
import { Metadata, Viewport } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { Source_Sans_3 } from 'next/font/google'
import '../globals.css'

const fontPrimary = Source_Sans_3({
  variable: '--font-primary',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#173f33'
}

// Root layout: the locale is a root param, read through next-intl
export function generateStaticParams() {
  return generateLocaleStaticParams()
}

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
    title: {
      default: ESTABLISHMENT_TITLE,
      template: `%s - ${ESTABLISHMENT_TITLE}`
    },
    alternates: pageAlternates(locale, '/')
  }
}

export default async function LocaleLayout({
  children
}: {
  children: React.ReactNode
}) {
  const locale = await getLocale()
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
