import { getAddress } from '@/services/queries/address'
import AddressInformationForm from './AddressInformationForm'

const AddressInformation = async () => {
  const address = await getAddress()

  return <AddressInformationForm address={address} />
}

export default AddressInformation
