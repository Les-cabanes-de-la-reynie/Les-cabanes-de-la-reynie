import { useTranslations } from 'next-intl'
import { NavigationIcon } from 'lucide-react'
import {
  POSTAL_CODE,
  ADDRESS_LOCALITY,
  ADDRESS_COUNTRY
} from '@/_constants/establishmentInformation'

const Itinerary = () => {
  const tContact = useTranslations('Contact')

  return (
    <div
      className='mb-2 flex flex-col text-primary hover:underline'
      itemProp='address'
      itemScope
      itemType='https://schema.org/PostalAddress'
    >
      <span className='flex items-center justify-center'>
        <NavigationIcon size={15} className='mr-1' />
        {tContact('Itinerary')} :
      </span>
      <div>
        <span itemProp='postalCode'>{POSTAL_CODE} &nbsp;</span>
        <span itemProp='addressLocality'>{ADDRESS_LOCALITY}, &nbsp;</span>
        <span>{ADDRESS_COUNTRY}</span>
      </div>
    </div>
  )
}
export default Itinerary
