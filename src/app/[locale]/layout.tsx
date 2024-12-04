import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/Header'
import { Toaster } from '@/components/ui/sonner'
import { VisitorCount } from '@/features/visitorCount/VisitorCount'
import { env } from '@/lib/env'
import Providers from '@/providers'
import { cn } from '@/utils/tailwind'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import localFont from 'next/font/local'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

const fontPrimary = localFont({
  variable: '--font-primary',
  src: [
    {
      path: '../../assets/fonts/Roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/Roboto/Roboto-Italic.ttf',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../../assets/fonts/Roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/Roboto/Roboto-MediumItalic.ttf',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../../assets/fonts/Roboto/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/Roboto/Roboto-BoldItalic.ttf',
      weight: '700',
      style: 'italic'
    },
    {
      path: '../../assets/fonts/Roboto/Roboto-Black.ttf',
      weight: '900',
      style: 'normal'
    },
    {
      path: '../../assets/fonts/Roboto/Roboto-BlackItalic.ttf',
      weight: '900',
      style: 'italic'
    }
  ]
})

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default
  } catch {
    notFound()
  }
}

export async function generateStaticParams() {
  return env.NEXT_PUBLIC_LANGS.map(locale => ({ locale }))
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const tCommon = await getTranslations({ locale, namespace: 'Common' })
  const tSEO = await getTranslations({ locale, namespace: 'SEO' })

  return {
    metadataBase: new URL(env.NEXT_PUBLIC_BASE_URL),
    title: {
      default: `${ESTABLISHMENT_TITLE} | ${tSEO('homeTitle')}`,
      template: `%s - ${ESTABLISHMENT_TITLE}`
    },
    alternates: {
      canonical: './'
    },
    description: tSEO('homeDescription'),
    openGraph: {
      title: `${tCommon('home')} - ${ESTABLISHMENT_TITLE}`,
      description: tSEO('homeDescription'),
      type: 'website',
      locale: locale,
      url: env.NEXT_PUBLIC_BASE_URL,
      siteName: ESTABLISHMENT_TITLE
    }
  }
}

const LocaleLayout = async ({
  children,
  params: { locale }
}: {
  children: ReactNode
  params: { locale: string }
}) => {
  unstable_setRequestLocale(locale)

  const messages = await getMessages(locale)

  // suppressHydrationWarning useful because next-themes trigger an error with: attribute='class'
  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        className={cn(
          fontPrimary.variable,
          'text:foreground relative flex min-h-screen w-full flex-col bg-background font-primary'
        )}
      >
        <Providers locale={locale} messages={messages}>
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

export default LocaleLayout
