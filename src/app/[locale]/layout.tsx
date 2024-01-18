import { notFound } from 'next/navigation'
import { cn } from '@/lib/utils'
import Header from '@/components/modules/Header'
import { Roboto } from 'next/font/google'
import Footer from '@/components/modules/Footer'
import { Toaster } from '@/components/ui/sonner'
import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { ReactNode } from 'react'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import Providers from '@/providers'
import { env } from '@/lib/env'

const fontFamily = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-roboto'
})

export type RootLayoutProps = {
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
  const t = await getTranslations({ locale, namespace: 'SEO' })

  return {
    title: {
      default: ESTABLISHMENT_TITLE,
      template: `%s - ${ESTABLISHMENT_TITLE}`
    },
    description: t('homeDescription')
  }
}

const LocaleLayout = async ({
  children,
  params: { locale }
}: RootLayoutProps) => {
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
