import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import homeBannerImage from '@/assets/hutAndYurt/home-banner.jpg'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { HeroBanner } from '@/components/HeroBanner'
import { IntroduceLesCabanesDeLaReynie } from '@/components/IntroduceLesCabanesDeLaReynie'
import { AccommodationsCardList } from '@/features/accommodations/AccommodationsCardList'
import { AccommodationsDescription } from '@/features/accommodations/AccommodationsDescription'
import { AccommodationsSliderWithSkeleton } from '@/features/accommodations/AccommodationsSliderWithSkeleton'
import { UploadImageCategoryKeyEnum } from '@/features/common/uploadImage/types'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

const Home = () => {
  const tHome = useTranslations('Home')

  return (
    <div className='w-full lg:-mt-[4.5rem]'>
      <HeroBanner
        title={ESTABLISHMENT_TITLE}
        className='select-none relative'
        callToActionText={tHome('CTA')}
      >
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

      <AccommodationsSliderWithSkeleton
        title={tHome('sliderTitle')}
        category={UploadImageCategoryKeyEnum.HomeSlider}
      />

      <Container>
        <Heading id='our-services' level={2}>
          {tHome('ourAccommodations')}
        </Heading>
        <AccommodationsCardList />
      </Container>

      <AccommodationsDescription />
    </div>
  )
}

export default Home
