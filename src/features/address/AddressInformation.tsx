'use client'

import { useSuspenseQuery } from '@tanstack/react-query'
import { AddressInformationForm } from './AddressInformationForm'
import { getAddressOptions } from './infrastructure/getAddressOptions'

export const AddressInformation = () => {
  const { data: address } = useSuspenseQuery(getAddressOptions)

  return <AddressInformationForm address={address} />
}
