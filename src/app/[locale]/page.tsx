import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import Container from '@/components/elements/Container'
import AccommodationsSlider from '@/components/modules/Accommodations/AccommodationsSlider'
import HeroBanner from '@/components/modules/HeroBanner'
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import fullscreenImage from '../../components/images/homeCarousel/forest.webp'

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  return (
    <div className='w-full select-none lg:-mt-[4.5rem]'>
      <HeroBanner title={ESTABLISHMENT_TITLE}>
        <Image
          alt='Paysage typique dans "Les cabanes de la Reynie"'
          src={fullscreenImage}
          placeholder='blur'
          className='h-full object-cover'
          priority
        />
      </HeroBanner>

      <AccommodationsSlider category={UploadImageCategoryKeyEnum.HomeSlider} />

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
