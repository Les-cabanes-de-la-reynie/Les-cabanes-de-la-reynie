import { notFound } from 'next/navigation'
import { cn } from 'utils/cn'
import Header from 'components/modules/Header'
import { Baloo_2 } from 'next/font/google'
import Footer from 'components/modules/Footer'
import Providers from 'providers'
import { Toaster } from 'sonner'
import { ESTABLISHMENT_TITLE } from '_constants/establishmentInformation'
import { ReactNode } from 'react'
import { NextIntlClientProvider, createTranslator } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

const fontFamily = Baloo_2({ display: 'swap', subsets: ['latin'] })

const locales = ['en', 'fr']

type RootLayoutProps = {
  children: ReactNode
  params: { locale: string }
}

async function getMessages(locale: string) {
  try {
    return (await import(`../../../messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
}

export async function generateStaticParams() {
  return ['en', 'fr'].map(locale => ({ locale }))
}

export async function generateMetadata({
  params: { locale }
}: RootLayoutProps) {
  const messages = await getMessages(locale)

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({ locale, messages })

  return {
    title: ESTABLISHMENT_TITLE,
    description: t('SEO.description')
  }
}

const RootLayout = async ({
  children,
  params: { locale }
}: RootLayoutProps) => {
  // Validate that the incoming `locale` parameter is valid
  const isValidLocale = locales.some(cur => cur === locale)
  if (!isValidLocale) notFound()

  unstable_setRequestLocale(locale)

  const messages = await getMessages(locale)

  // suppressHydrationWarning useful because next-themes trigger an error with: attribute='class'
  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        className={cn(
          fontFamily.className,
          'relative flex min-h-screen w-full flex-col bg-zinc-100 dark:bg-zinc-900'
        )}
      >
        <Toaster richColors position='top-right' />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Header />
            <main id='main' role='main' className='flex flex-1'>
              {children}
            </main>
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export default RootLayout
