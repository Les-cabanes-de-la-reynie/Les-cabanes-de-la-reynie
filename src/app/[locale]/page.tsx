import Image from 'next/image'
import fullscreenImage from '../../components/images/homeCarousel/forest.jpg'
import PracticalInformation from '@/components/modules/PracticalInformation'
import Heading from '@/components/elements/Heading'
import Accommodations from '@/components/modules/Accommodations'
import { unstable_setRequestLocale } from 'next-intl/server'
import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import Container from '@/components/elements/Container'

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  return (
    <div className='w-full select-none lg:-mt-[4.5rem]'>
      <div className='w-full select-none'>
        <div className='relative h-96 w-full select-none lg:h-screen'>
          <Image
            alt='paysage typique dans "Les cabanes de la Reynie"'
            src={fullscreenImage}
            placeholder='blur'
            quality={100}
            fill
            sizes='100vw'
            className='object-cover'
            priority
          />
          <Heading
            level={1}
            className='absolute inset-0 flex items-center justify-center p-4 text-center text-5xl text-primary-foreground lg:text-6xl'
          >
            {ESTABLISHMENT_TITLE}
          </Heading>
        </div>
      </div>
      <PracticalInformation />
      <Accommodations />
      <Container>
        <div className='h-72 w-full'>Test</div>
        <div className='h-72 w-full'>Test</div>
      </Container>
    </div>
  )
}

export default Home
