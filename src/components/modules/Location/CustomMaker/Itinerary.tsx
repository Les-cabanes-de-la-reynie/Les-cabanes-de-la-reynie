import { Address } from '@/_types/address'
import { NavigationIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

type ItineraryProps = { address: Address }

const Itinerary = ({ address }: ItineraryProps) => {
  const tContact = useTranslations('Contact')

  const { postalCode, city, country } = address

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
        <span itemProp='postalCode'>{postalCode} &nbsp;</span>
        <span itemProp='addressLocality'>{city}, &nbsp;</span>
        <span>{country}</span>
      </div>
    </div>
  )
}
export default Itinerary
