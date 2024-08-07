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
import homeBannerImage from '../../components/images/hutAndYurt/home-banner.jpg'
import hutImageFront from '../../components/images/hutAndYurt/home-hut-front.jpg'
import hutImageHover from '../../components/images/hutAndYurt/home-hut-hover.jpg'
import yurtImageFront from '../../components/images/hutAndYurt/home-yurt-front.jpg'
import yurtImageHover from '../../components/images/hutAndYurt/home-yurt-hover.jpg'

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Home')

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
        <div className='flex gap-8 flex-wrap'>
          <AccommodationsCard
            href={`/${locale}/logements/yourte`}
            imageOnFront={yurtImageFront}
            imageOnHover={yurtImageHover}
            textContent={t('seeOurYurt')}
          />

          <AccommodationsCard
            href={`/${locale}/logements/cabane`}
            imageOnFront={hutImageFront}
            imageOnHover={hutImageHover}
            textContent={t('seeOurHut')}
          />
        </div>
      </Container>
    </div>
  )
}

export default Home
