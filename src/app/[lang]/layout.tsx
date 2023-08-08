import './globals.css'
import type { Metadata } from 'next'
import clsx from 'clsx'
import { Locale, i18n } from '../../../i18n.config'
import Header from '@/components/modules/Header'
import { Baloo_2 } from 'next/font/google'

const fontFamily = Baloo_2({ display: 'swap', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
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
        className={clsx(fontFamily.className, 'flex flex-col bg-stone-900')}
      >
        <Header lang={params.lang} />
        <main id='main' role='main'>
          {children}
        </main>
      </body>
    </html>
  )
}
