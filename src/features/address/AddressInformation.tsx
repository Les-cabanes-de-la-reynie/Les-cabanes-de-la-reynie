'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { AddressInformationForm } from './AddressInformationForm'
import { useGetAddress } from './hooks/useGetAddress'

export const AddressInformation = () => {
  const { data: address } = useSuspenseQuery(useGetAddress)

  return <AddressInformationForm address={address} />
}
