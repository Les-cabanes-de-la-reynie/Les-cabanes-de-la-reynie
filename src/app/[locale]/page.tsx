import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import Container from '@/components/elements/Container'
import AccommodationsDescription from '@/components/modules/Accommodations/AccommodationsDescription'
import AccommodationsSlider from '@/components/modules/Accommodations/AccommodationsSlider'
import HeroBanner from '@/components/modules/HeroBanner'
import IntroduceLesCabanesDeLaReynie from '@/components/modules/IntroduceLesCabanesDeLaReynie'
import { unstable_setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import Link from 'next/link'
import fullscreenImage from '../../components/images/hutAndYurt/cabane-ext.jpg'

const Home = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  return (
    <div className='w-full select-none lg:-mt-[4.5rem]'>
      <HeroBanner title={ESTABLISHMENT_TITLE} className='mb-8 md:mb-10'>
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

      <AccommodationsSlider category={UploadImageCategoryKeyEnum.HomeSlider} />

      <Container>
        <div className='grid grid-cols-2 gap-4 '>
          <Link href={`/${locale}/logements/yourte`} className='w-max'>
            <div className='h-60 w-60 bg-primary flex items-center justify-center'>
              YOURTE
            </div>
          </Link>
          <Link href={`/${locale}/logements/cabane`} className='w-max'>
            <div className='h-60 w-60 bg-primary flex items-center justify-center'>
              CABANE
            </div>
          </Link>
        </div>
      </Container>

      <div className='my-8 h-96 w-full select-none bg-customImg1 bg-cover bg-fixed bg-center bg-no-repeat md:my-10' />

      <AccommodationsDescription />
    </div>
  )
}

export default Home
