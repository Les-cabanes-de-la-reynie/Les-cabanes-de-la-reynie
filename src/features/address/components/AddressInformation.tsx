import { getAddress } from '../infrastructure/queries/getAddress'
import { AddressInformationForm } from './AddressInformationForm'

export const AddressInformation = async () => {
  const address = await getAddress()

  return <AddressInformationForm address={address} />
}
