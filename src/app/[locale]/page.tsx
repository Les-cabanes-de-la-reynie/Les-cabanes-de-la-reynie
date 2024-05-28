import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import Container from '@/components/elements/Container'
import AccommodationsCard from '@/components/modules/Accommodations/AccommodationsCard'
import AccommodationsDescription from '@/components/modules/Accommodations/AccommodationsDescription'
import AccommodationsSlider from '@/components/modules/Accommodations/AccommodationsSlider'
import HeroBanner from '@/components/modules/HeroBanner'
import IntroduceLesCabanesDeLaReynie from '@/components/modules/IntroduceLesCabanesDeLaReynie'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import yourtImageFront from '../../components/images/homeCarousel/forest2.webp'
import yourtImageHover from '../../components/images/homeCarousel/forest3.webp'
import fullscreenImage from '../../components/images/hutAndYurt/cabane-ext.jpg'

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Home')

  return (
    <div className='w-full lg:-mt-[4.5rem]'>
      <HeroBanner title={ESTABLISHMENT_TITLE} className='select-none'>
        <Image
          alt='Paysage typique dans "Les cabanes de la Reynie"'
          src={fullscreenImage}
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
        <div className='flex gap-8 flex-wrap'>
          <AccommodationsCard
            href={`/${locale}/logements/yourte`}
            imageOnFront={yourtImageFront}
            imageOnHover={yourtImageHover}
            textContent={t('seeOurYurt')}
          />

          <AccommodationsCard
            href={`/${locale}/logements/cabane`}
            imageOnFront={yourtImageFront}
            imageOnHover={yourtImageHover}
            textContent={t('seeOurHut')}
          />
        </div>
      </Container>
    </div>
  )
}

export default Home
