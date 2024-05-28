import P from '@/components/elements/P'
import { PropsWithChildren } from 'react'

const OurGourmetOfferItem = ({ children }: PropsWithChildren) => {
  return (
    <li className='list-disc'>
      <P>{children}</P>
    </li>
  )
}
export default OurGourmetOfferItem
