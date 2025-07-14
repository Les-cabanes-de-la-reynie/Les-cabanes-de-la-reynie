import { ourFileRouter } from '@/app/api/uploadthing/core'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { NextIntlClientProvider } from 'next-intl'
import { PropsWithChildren } from 'react'
import { extractRouterConfig } from 'uploadthing/server'
import { QueryProvider } from './query-provider'
import { ThemeProvider } from './theme-provider'

export const Providers = async ({ children }: PropsWithChildren) => {
  return (
    <QueryProvider>
      <NextIntlClientProvider>
        <ThemeProvider
          attribute='class'
          defaultTheme='dark'
          disableTransitionOnChange
        >
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
        </ThemeProvider>
      </NextIntlClientProvider>
    </QueryProvider>
  )
}
