import { cn } from '@/utils/cn'
import Link from 'next/link'
import { itineraryUrl } from './const'
import {
  PNE_ADDRESS,
  PNE_CITY,
  PNE_PHONE_NUMBER
} from '@/_constants/restaurantInformation'
import Heading from '@/components/elements/Heading'

const Address = () => {
  return (
    <address className='text-center text-sm'>
      <Heading level={3} className={cn('mb-2 text-zinc-800')}>
        PickN`Eat
      </Heading>
      <Link
        href={itineraryUrl}
        target='_blank'
        rel='noreferrer'
        className='mb-2 flex flex-col hover:underline'
      >
        <span>{PNE_ADDRESS}</span>
        <span>{PNE_CITY}</span>
      </Link>
      <Link href='tel:+33772348639' className='hover:underline'>
        <span>&#9742; {PNE_PHONE_NUMBER}</span>
      </Link>
    </address>
  )
}
export default Address
