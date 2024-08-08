import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import Footer from '@/components/modules/Footer'
import Header from '@/components/modules/Header'
import { Toaster } from '@/components/ui/sonner'
import { env } from '@/lib/env'
import Providers from '@/providers'
import { cn } from '@/utils/tailwind'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { Roboto } from 'next/font/google'
import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

const fontFamily = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-primary'
})

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
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
      default: ESTABLISHMENT_TITLE,
      template: `%s - ${ESTABLISHMENT_TITLE}`
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
          fontFamily.variable,
          'text:foreground relative flex min-h-screen w-full flex-col bg-background font-sans'
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
      </body>
    </html>
  )
}

export default LocaleLayout
