import { PropsWithChildren } from 'react'
import { ThemeProvider } from './theme-provider'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { NextIntlClientProvider } from 'next-intl'

interface ProvidersProps extends PropsWithChildren {
  locale: string
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  messages: any
}

const Providers = ({ locale, messages, children }: ProvidersProps) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <UserProvider loginUrl='/api/auth/login' profileUrl='/api/auth/me'>
          {children}
        </UserProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
export default Providers
