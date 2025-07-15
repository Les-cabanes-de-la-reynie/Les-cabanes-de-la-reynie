import homeBannerImage from '@/assets/cabinAndYurt/home-banner.jpg'
import { AccommodationsCardList } from '@/features/accommodations/components/AccommodationsCardList'
import { AccommodationsDescription } from '@/features/accommodations/components/AccommodationsDescription'
import { AccommodationsSliderWithSkeleton } from '@/features/accommodations/components/AccommodationsSliderWithSkeleton'
import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/types'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { HeroBanner } from '@/shared/components/HeroBanner'
import { IntroduceLesCabanesDeLaReynie } from '@/shared/components/IntroduceLesCabanesDeLaReynie'
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

      <div className='mb-8 h-96 w-full select-none bg-(image:--home-parallax-image) bg-cover bg-fixed bg-center bg-no-repeat md:mb-10' />

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
