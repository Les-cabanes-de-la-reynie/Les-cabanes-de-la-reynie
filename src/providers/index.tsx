import { PropsWithChildren } from 'react'
import { ThemeProvider } from './theme-provider'

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
      {children}
    </ThemeProvider>
  )
}
export default Providers
