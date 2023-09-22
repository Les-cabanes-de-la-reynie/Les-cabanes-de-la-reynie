import { PropsWithChildren } from 'react'

const FooterItem = ({ children }: PropsWithChildren) => {
  return (
    <li className='mb-2 max-w-max text-sm text-zinc-700 hover:underline dark:text-white md:max-w-none'>
      {children}
    </li>
  )
}
export default FooterItem
