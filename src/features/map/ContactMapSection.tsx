import { getAddress } from '@/features/address/infrastructure/getAddress'
import { unstable_noStore } from 'next/cache'
import { MapSection } from './MapSection'

export const ContactMapSection = async () => {
  unstable_noStore()
  const address = await getAddress()

  return <MapSection address={address} />
}
