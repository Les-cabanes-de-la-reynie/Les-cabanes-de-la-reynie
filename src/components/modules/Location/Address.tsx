import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import { NavigationIcon, PhoneIcon } from 'lucide-react'
import {
  ESTABLISHMENT_TITLE,
  PHONE_NUMBER,
  POSTAL_CODE,
  ADDRESS_LOCALITY,
  ADDRESS_COUNTRY
} from '@/_constants/establishmentInformation'
import Heading from '@/components/elements/Heading'

type AddressProps = {
  position: number[]
}

const Address = ({ position }: AddressProps) => {
  const t = useTranslations('Contact')

  const [lat, long] = position

  const COUNTRY_PHONE_CODE = 33
  const FORMATED_PHONE_NUMBER = PHONE_NUMBER.slice(1).replaceAll(' ', '')

  return (
    <address className='text-center text-sm'>
      <Heading level={3} className={cn('mb-2 text-primary dark:text-primary')}>
        {ESTABLISHMENT_TITLE}
      </Heading>
      <Link
        href={`https://www.google.fr/maps/dir/${lat},+${long}/La+Reynie+Haute,+19310+Louignac/@44.1892761,1.0389325,8z`}
        target='_blank'
        rel='noreferrer'
        className='mb-2 flex flex-col hover:underline'
        itemProp='address'
        itemScope
        itemType='https://schema.org/PostalAddress'
      >
        <span className='flex items-center justify-center'>
          <NavigationIcon size={15} className='mr-1' />
          {t('Itinerary')} :
        </span>
        <div>
          <span itemProp='postalCode'>{POSTAL_CODE} &nbsp;</span>
          <span itemProp='addressLocality'>{ADDRESS_LOCALITY}, &nbsp;</span>
          <span>{ADDRESS_COUNTRY}</span>
        </div>
      </Link>
      <Link
        href={`tel:+${COUNTRY_PHONE_CODE}${FORMATED_PHONE_NUMBER}`}
        className='hover:underline'
      >
        <span className='flex items-center justify-center'>
          <PhoneIcon size={15} className='mr-1' />
          <span itemProp='telephone'>{PHONE_NUMBER}</span>
        </span>
      </Link>
    </address>
  )
}
export default Address
