import { P } from '@/shared/components/P'
import { PropsWithChildren } from 'react'

export const OurGourmetOfferItem = ({ children }: PropsWithChildren) => {
  return (
    <li className='list-disc marker:text-ink'>
      <P>{children}</P>
    </li>
  )
}
