import Image from 'next/image'
import fullscreenImage from '../../components/images/home carousel/forest.jpg'
import PracticalInformation from 'components/modules/PracticalInformation'
import Heading from 'components/elements/Heading'
import Accommodations from 'components/modules/Accommodations'
import { unstable_setRequestLocale } from 'next-intl/server'
import { ESTABLISHMENT_TITLE } from '_constants/establishmentInformation'

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  return (
    <div className='w-full select-none lg:-mt-[4.5rem]'>
      <div className='w-full select-none'>
        <div className='relative h-96 w-full select-none lg:h-screen'>
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
            {ESTABLISHMENT_TITLE}
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

export default Home
