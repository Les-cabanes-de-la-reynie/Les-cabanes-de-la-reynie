import { NextIntlClientProvider } from 'next-intl'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from './theme-provider'

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <NextIntlClientProvider>
      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
