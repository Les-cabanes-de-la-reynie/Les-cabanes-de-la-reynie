import dynamic from 'next/dynamic'

const Map = dynamic(() => import('./Map'), {
  loading: () => <div className='motion-safe:animate-spin'></div>,
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
