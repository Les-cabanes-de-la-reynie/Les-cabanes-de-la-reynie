import Image from 'next/image'
import fullscreenImage from '../../components/images/forest.jpg'
import PracticalInformation from '@/components/modules/PracticalInformation'

export default function Home() {
  return (
    <div className='w-full lg:-translate-y-[4.5rem]'>
      <div className='w-full'>
        <div className='relative h-96 w-full lg:h-screen'>
          <Image
            src={fullscreenImage}
            alt='TODO'
            fill
            quality='100'
            priority
            className='object-cover'
          />
        </div>
      </div>
      <div className='container h-72'>
        <PracticalInformation />
      </div>
      <div className='h-72 w-full'>Test</div>
      <div className='h-72 w-full'>Test</div>
      <div className='h-72 w-full'>Test</div>
      <div className='h-72 w-full'>Test</div>
      <div className='h-72 w-full'>Test</div>
      <div className='h-72 w-full'>Test</div>
    </div>
  )
}
