import { Loader2 } from 'lucide-react'
import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map'), {
  loading: () => (
    <Loader2 className='flex h-full w-full animate-spin items-center justify-center text-white' />
  ),
  ssr: false
})

const Location = () => {
  return (
    <div
      className='relative flex h-96 w-full flex-grow items-center justify-center'
      data-test='locationContainer'
    >
      <Map />
    </div>
  )
}
export default Location
