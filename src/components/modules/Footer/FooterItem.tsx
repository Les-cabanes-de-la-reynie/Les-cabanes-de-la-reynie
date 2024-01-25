import { PropsWithChildren } from 'react'

const FooterItem = ({ children }: PropsWithChildren) => {
  return (
    <li className='mb-3 max-w-max text-sm text-muted-foreground hover:underline md:max-w-none'>
      {children}
    </li>
  )
}
export default FooterItem
