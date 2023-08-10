import { PropsWithChildren } from 'react'

const FooterNav = ({ children }: PropsWithChildren) => {
  return <nav className='mb-6 last:mb-0 md:mb-0 md:text-center'>{children}</nav>
}
export default FooterNav
