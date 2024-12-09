import { ourFileRouter } from '@/app/api/uploadthing/core'
import { UserProvider } from '@auth0/nextjs-auth0/client'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { PropsWithChildren } from 'react'
import { extractRouterConfig } from 'uploadthing/server'
import { ThemeProvider } from './theme-provider'

type ProvidersProps = PropsWithChildren & {
  locale: string
}

export const Providers = async ({ locale, children }: ProvidersProps) => {
  const messages = await getMessages()

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute='class'
        defaultTheme='system'
        enableSystem
        disableTransitionOnChange
      >
        <UserProvider>
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          {children}
        </UserProvider>
      </ThemeProvider>
    </NextIntlClientProvider>
  )
}
