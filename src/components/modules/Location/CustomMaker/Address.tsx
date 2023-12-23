import Link from 'next/link'
import { cn } from '@/lib/utils'
import { PhoneIcon } from 'lucide-react'
import {
  ESTABLISHMENT_TITLE,
  PHONE_NUMBER
} from '@/_constants/establishmentInformation'
import Heading from '@/components/elements/Heading'
import ItineraryAlertDialog from './ItineraryAlertDialog'

const Address = () => {
  const COUNTRY_PHONE_CODE = 33
  const FORMATED_PHONE_NUMBER = PHONE_NUMBER.slice(1).replaceAll(' ', '')

  return (
    <address className='text-center text-sm'>
      <Heading level={3} className={cn('mb-2 text-primary dark:text-primary')}>
        {ESTABLISHMENT_TITLE}
      </Heading>

      <ItineraryAlertDialog />

      <Link
        href={`tel:+${COUNTRY_PHONE_CODE}${FORMATED_PHONE_NUMBER}`}
        className='hover:underline'
      >
        <span className='flex items-center justify-center text-primary dark:text-primary'>
          <PhoneIcon size={15} className='mr-1' />
          <span itemProp='telephone'>{PHONE_NUMBER}</span>
        </span>
      </Link>
    </address>
  )
}
export default Address
