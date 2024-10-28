import { getAddress } from '@/services/queries/address'
import { unstable_noStore } from 'next/cache'
import { Map } from './Map'

export const MapContainer = async () => {
  unstable_noStore()
  const address = await getAddress()

  return <Map address={address} />
}
