'use client'

import { getAddressOptions } from '@/features/address/infrastructure/getAddressOptions'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { formatPhoneNumber } from '@/shared/utils/formats'
import { useSuspenseQuery } from '@tanstack/react-query'

export const Address = () => {
  const { data: address } = useSuspenseQuery(getAddressOptions)

  return (
    <address
      className='text-sm not-italic flex flex-col gap-2'
      itemScope
      itemType='https://schema.org/LodgingBusiness'
    >
      <div itemProp='name' className='font-bold'>
        {ESTABLISHMENT_TITLE}
      </div>

      <div
        itemProp='address'
        itemScope
        itemType='https://schema.org/PostalAddress'
        className='flex flex-col'
      >
        <strong itemProp='streetAddress' className='font-normal'>
          {address.streetAddress}
        </strong>
        <div className='flex gap-1'>
          <span itemProp='postalCode'>{address.postalCode},</span>
          <span itemProp='addressLocality'>{address.city}</span>
          <span itemProp='addressCountry'>{address.country}</span>
        </div>
      </div>

      <div itemProp='telephone'>
        <a href={`tel:${address.phone}`} className='underline italic'>
          {formatPhoneNumber(address.phone)}
        </a>
      </div>

      <div itemProp='email'>
        <a href={`mailto:${address.email}`} className='underline italic'>
          {address.email}
        </a>
      </div>
    </address>
  )
}
