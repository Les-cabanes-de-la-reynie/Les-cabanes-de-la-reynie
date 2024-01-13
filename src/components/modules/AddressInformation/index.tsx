import P from '@/components/elements/P'
import AddressInformationForm from './AddressInformationForm'
import { getAddress } from '@/services/queries/address'

const AddressInformation = async () => {
  const address = await getAddress()

  return (
    <>
      <P className='mb-5'>
        Les informations ici vont servir à mettre à jour la popover de la map
        sur la page Contact
      </P>

      <AddressInformationForm address={address} />
    </>
  )
}

export default AddressInformation
