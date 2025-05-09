import { PropsWithChildren } from 'react'

export const FooterItem = ({ children }: PropsWithChildren) => {
  return (
    <li className='mb-3 max-w-max text-sm hover:underline md:max-w-none'>
      {children}
    </li>
  )
}
