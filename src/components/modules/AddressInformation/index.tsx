import P from '@/components/elements/P'
import { getAddress } from '@/services/queries/address'
import AddressInformationForm from './AddressInformationForm'

const AddressInformation = async () => {
  const address = await getAddress()

  return (
    <>
      <P className='mb-5'>
        Les informations ici vont être affichées sur la carte dans la page
        contact
      </P>

      <AddressInformationForm address={address} />
    </>
  )
}

export default AddressInformation
