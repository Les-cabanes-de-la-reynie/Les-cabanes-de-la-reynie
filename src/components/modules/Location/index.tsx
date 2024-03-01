import Loader from '@/components/elements/Loader'
import { getAddress } from '@/services/queries/address'
import { unstable_noStore } from 'next/cache'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map'), {
  loading: () => <Loader className='mt-0 flex items-center justify-center' />,
  ssr: false
})

const Location = async () => {
  unstable_noStore()
  const address = await getAddress()

  return <Map address={address} />
}
export default Location
