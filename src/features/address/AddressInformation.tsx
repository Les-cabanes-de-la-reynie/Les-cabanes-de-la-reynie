import { getAddress } from '@/features/address/infrastructure/getAddress'
import { unstable_noStore } from 'next/cache'
import { AddressInformationForm } from './AddressInformationForm'

export const AddressInformation = async () => {
  unstable_noStore()
  const address = await getAddress()

  return <AddressInformationForm address={address} />
}
