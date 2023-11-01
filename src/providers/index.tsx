import { PropsWithChildren } from 'react'
import { ThemeProvider } from './theme-provider'
import { UserProvider } from '@auth0/nextjs-auth0/client'

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
      enableSystem
      disableTransitionOnChange
    >
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  )
}
export default Providers
