import Image from 'next/image'
import fullscreenImage from '../../components/images/home carousel/forest.jpg'
import PracticalInformation from '@/components/modules/PracticalInformation'
import Heading from '@/components/elements/Heading'
import Accommodations from '@/components/modules/Accommodations'

export default function Home() {
  return (
    <div className='w-full lg:-mt-[4.5rem]'>
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
          <Heading
            level={1}
            className='absolute inset-0 flex items-center justify-center text-white'
          >
            Mon super titre
          </Heading>
        </div>
      </div>
      <div className='h-72'>
        <PracticalInformation />
      </div>
      <Accommodations />
      <div className='h-72 w-full'>Test</div>
      <div className='h-72 w-full'>Test</div>
      <div className='h-72 w-full'>Test</div>
      <div className='h-72 w-full'>Test</div>
      <div className='h-72 w-full'>Test</div>
    </div>
  )
}
