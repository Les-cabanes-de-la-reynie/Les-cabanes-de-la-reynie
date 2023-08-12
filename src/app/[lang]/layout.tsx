import './globals.css'
import type { Metadata } from 'next'
import { Locale, i18n } from '../../../i18n.config'
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

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  return (
    <html lang={params.lang}>
      <body
        className={cn(
          fontFamily.className,
          'relative flex min-h-screen w-full flex-col bg-stone-900'
        )}
      >
        <Header lang={params.lang} />
        <main id='main' role='main' className='flex flex-1'>
          {children}
        </main>
        <Footer lang={params.lang} />
      </body>
    </html>
  )
}
