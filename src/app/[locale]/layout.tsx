import { notFound } from 'next/navigation'
import { cn } from '@/lib/utils'
import Header from '@/components/modules/Header'
import { Roboto } from 'next/font/google'
import Footer from '@/components/modules/Footer'
import { Toaster } from 'sonner'
import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { ReactNode } from 'react'
import { NextIntlClientProvider, createTranslator } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Providers from '@/providers'
import { env } from '@/env'

const fontFamily = Roboto({
  weight: ['400', '500', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
})

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
  return env.NEXT_PUBLIC_LANGS.map(locale => ({ locale }))
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
  const isValidLocale = env.NEXT_PUBLIC_LANGS.some(cur => cur === locale)
  if (!isValidLocale) notFound()

  unstable_setRequestLocale(locale)

  const messages = await getMessages(locale)

  // suppressHydrationWarning useful because next-themes trigger an error with: attribute='class'
  return (
    <html suppressHydrationWarning lang={locale}>
      <body
        className={cn(
          fontFamily.className,
          'text:foreground relative flex min-h-screen w-full flex-col bg-background'
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
