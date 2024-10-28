import { P } from '@/components/P'
import { PropsWithChildren } from 'react'

export const OurGourmetOfferItem = ({ children }: PropsWithChildren) => {
  return (
    <li className='list-disc'>
      <P>{children}</P>
    </li>
  )
}
