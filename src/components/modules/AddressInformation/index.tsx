import { getAddress } from '@/services/queries/address'
import { unstable_noStore } from 'next/cache'
import AddressInformationForm from './AddressInformationForm'

const AddressInformation = async () => {
  unstable_noStore()
  const address = await getAddress()

  return <AddressInformationForm address={address} />
}

export default AddressInformation
