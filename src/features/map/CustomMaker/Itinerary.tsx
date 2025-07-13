import { APP_ICON_SIZE_CLASSNAME } from '@/shared/_constants/className'
import { Address } from '@/shared/_types/address'
import { IconContainer } from '@/shared/components/IconContainer'
import { NavigationIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

type ItineraryProps = { address: Address }

export const Itinerary = ({ address }: ItineraryProps) => {
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
        <IconContainer>
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
