'use client'

import { AddressInformationForm } from './AddressInformationForm'
import { getAddress } from './infrastructure/queries/getAddress'

export const AddressInformation = async () => {
  const address = await getAddress()

  return <AddressInformationForm address={address} />
}
