'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { useGetAddress } from '../address/hooks/useGetAddress'
import { MapSection } from './MapSection'

export const ContactMapSection = () => {
  const { data: address } = useSuspenseQuery(useGetAddress)

  return <MapSection address={address} />
}
