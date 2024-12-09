import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import homeBannerImage from '@/assets/hutAndYurt/home-banner.jpg'
import { Container } from '@/components/Container'
import { HeroBanner } from '@/components/HeroBanner'
import { IntroduceLesCabanesDeLaReynie } from '@/components/IntroduceLesCabanesDeLaReynie'
import { AccommodationsCardList } from '@/features/accommodations/AccommodationsCardList'
import { AccommodationsDescription } from '@/features/accommodations/AccommodationsDescription'
import { AccommodationsSlider } from '@/features/accommodations/AccommodationsSlider'
import { UploadImageCategoryKeyEnum } from '@/features/common/uploadImage/types'
import Image from 'next/image'

const Home = () => {
  return (
    <div className='w-full lg:-mt-[4.5rem]'>
      <HeroBanner title={ESTABLISHMENT_TITLE} className='select-none'>
        <Image
          alt='Paysage typique dans "Les cabanes de la Reynie"'
          src={homeBannerImage}
          placeholder='blur'
          fill
          sizes='100vw'
          className='object-cover'
          priority
        />
      </HeroBanner>

      <IntroduceLesCabanesDeLaReynie />

      <div className='mb-8 h-96 w-full select-none bg-homeParallaxImage bg-cover bg-fixed bg-center bg-no-repeat md:mb-10' />

      <AccommodationsSlider category={UploadImageCategoryKeyEnum.HomeSlider} />

      <AccommodationsDescription />

      <Container>
        <AccommodationsCardList />
      </Container>
    </div>
  )
}

export default Home
