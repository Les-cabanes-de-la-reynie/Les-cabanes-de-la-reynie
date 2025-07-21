'use client'

import { getAddressOptions } from '@/features/address/infrastructure/getAddressOptions'
import { APP_ICON_SIZE_CLASSNAME } from '@/shared/_constants/className'
import { IconContainer } from '@/shared/components/IconContainer'
import { useSuspenseQuery } from '@tanstack/react-query'
import { NavigationIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export const Itinerary = () => {
  const tContact = useTranslations('Contact')

  const { data: address } = useSuspenseQuery(getAddressOptions)

  const { postalCode, city, country, streetAddress } = address

  return (
    <div className='flex flex-col text-primary hover:underline'>
      <span className='flex items-center'>
        <IconContainer>
          <NavigationIcon className={APP_ICON_SIZE_CLASSNAME} />
        </IconContainer>
        {tContact('Itinerary')}
      </span>
      <div className='flex gap-1'>
        {!!streetAddress && <span>{streetAddress}</span>}
        <span>{postalCode},</span>
        <span>{city}</span>
        <span>{country}</span>
      </div>
    </div>
  )
}
