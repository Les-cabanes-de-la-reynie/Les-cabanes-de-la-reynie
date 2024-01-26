import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import Accommodations from '@/components/modules/Accommodations'
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import fullscreenImage from '../../components/images/homeCarousel/forest.webp'

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
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 p-4 text-center'>
            <Heading
              level={1}
              className='text-5xl text-primary-foreground lg:text-6xl'
            >
              {ESTABLISHMENT_TITLE}
            </Heading>
          </div>
        </div>
      </div>

      <Accommodations category={UploadImageCategoryKeyEnum.HomeSlider} />

      <Container>
        <div className='h-72 w-full'>Test</div>
      </Container>

      <div className='h-96 w-full select-none bg-customImg1 bg-fixed bg-center'></div>

      <Container>
        <div className='h-72 w-full'>Test</div>
        <div className='h-72 w-full'>Test</div>
      </Container>
    </div>
  )
}

export default Home
