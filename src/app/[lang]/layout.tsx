import './globals.css'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import createTranslation from 'next-translate/createTranslation'
import i18n from '../../../i18n'
import { cn } from '@/utils/cn'
import Header from '@/components/modules/Header'
import { Baloo_2 } from 'next/font/google'
import Footer from '@/components/modules/Footer'
import Providers from '@/providers'
import { Toaster } from 'sonner'

const fontFamily = Baloo_2({ display: 'swap', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PickN`Eat',
  description:
    "Bienvenue sur PickN`Eat, le premier site de commande de burger en ligne qui se démarque par sa simplicité d'utilisation et de sa multitude de choix"
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { lang } = createTranslation('navigation')

  // Redirect to default locale if lang is not supported. /second-page -> /en/second-page
  if (!i18n.locales.includes(lang)) redirect(`/${i18n.defaultLocale}/${lang}`)

  // suppressHydrationWarning useful because next-themes trigger an error with: attribute='class'
  return (
    <html suppressHydrationWarning lang={lang}>
      <body
        className={cn(
          fontFamily.className,
          'relative flex min-h-screen w-full flex-col bg-zinc-100 dark:bg-zinc-900'
        )}
      >
        <Toaster richColors position='top-right' />
        <Providers>
          <Header />
          <main id='main' role='main' className='flex flex-1'>
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
