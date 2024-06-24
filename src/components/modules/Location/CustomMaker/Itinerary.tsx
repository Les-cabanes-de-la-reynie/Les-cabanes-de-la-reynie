import { APP_ICON_SIZE_CLASSNAME } from '@/_constants/className'
import { Address } from '@/_types/address'
import { IconContainer } from '@/components/elements/IconContainer'
import { NavigationIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

type ItineraryProps = { address: Address }

const Itinerary = ({ address }: ItineraryProps) => {
  const tContact = useTranslations('Contact')

  const { postalCode, city, country, streetAddress } = address

  return (
    <div
      className='flex flex-col text-primary hover:underline'
      itemProp='address'
      itemScope
      itemType='https://schema.org/PostalAddress'
    >
      <span className='flex items-center'>
        <IconContainer size={'none'}>
          <NavigationIcon className={APP_ICON_SIZE_CLASSNAME} />
        </IconContainer>
        {tContact('Itinerary')} :
      </span>
      <div>
        {!!streetAddress && (
          <span itemProp='streetAddress'>{streetAddress} &nbsp;</span>
        )}
        <span itemProp='postalCode'>{postalCode} &nbsp;</span>
        <span itemProp='addressLocality'>{city}, &nbsp;</span>
        <span>{country}</span>
      </div>
    </div>
  )
}
export default Itinerary
