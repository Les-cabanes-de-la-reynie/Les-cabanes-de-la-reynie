'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { getAddressOptions } from '../address/infrastructure/getAddressOptions'
import { MapSection } from './MapSection'

export const ContactMapSection = () => {
  const { data: address } = useSuspenseQuery(getAddressOptions)

  return <MapSection address={address} />
}
