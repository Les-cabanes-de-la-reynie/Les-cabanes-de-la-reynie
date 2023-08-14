import './globals.css'
import type { Metadata } from 'next'
import useTranslation from 'next-translate/useTranslation'
import i18n from '../../../i18n'
import { redirect } from 'next/navigation'
import { cn } from '@/utils/cn'
import Header from '@/components/modules/Header'
import { Baloo_2 } from 'next/font/google'
import Footer from '@/components/modules/Footer'

const fontFamily = Baloo_2({ display: 'swap', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'PickN`Eat',
  description:
    "Bienvenue sur PickN`Eat, le premier site de commande de burger en ligne qui se démarque par sa simplicité d'utilisation et de sa multitude de choix"
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { lang } = useTranslation('navigation')

  // Redirect to default locale if lang is not supported. /second-page -> /en/second-page
  if (!i18n.locales.includes(lang)) redirect(`/${i18n.defaultLocale}/${lang}`)

  return (
    <html lang={lang}>
      <body
        className={cn(
          fontFamily.className,
          'relative flex min-h-screen w-full flex-col bg-stone-900'
        )}
      >
        <Header />
        <main id='main' role='main' className='flex flex-1'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
