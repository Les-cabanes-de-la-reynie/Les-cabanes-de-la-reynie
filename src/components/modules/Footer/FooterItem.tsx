import Link from 'next/link'
import { PropsWithChildren } from 'react'

const FooterItem = ({ children }: PropsWithChildren) => {
  return (
    <li className='mb-2 max-w-max text-sm text-white hover:underline md:max-w-none'>
      <Link href='/'>{children}</Link>
    </li>
  )
}
export default FooterItem
