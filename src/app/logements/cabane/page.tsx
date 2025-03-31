import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { SEO } from '@/_constants/SEO'
import headerImage from '@/assets/cabinAndYurt/cabin-header.jpg'
import { Heading } from '@/components/Heading'
import { OurGourmetOffer } from '@/components/ourGourmetOffer/OurGourmetOffer'
import { P } from '@/components/P'
import { AccommodationsHeader } from '@/features/accommodations/AccommodationsHeader/AccommodationsHeader'
import { AccommodationsHeaderContent } from '@/features/accommodations/AccommodationsHeader/AccommodationsHeaderContent'
import { AccommodationsHeaderImage } from '@/features/accommodations/AccommodationsHeader/AccommodationsHeaderImage'
import { AccommodationsPopover } from '@/features/accommodations/AccommodationsPopover'
import { AccommodationsPrice } from '@/features/accommodations/AccommodationsPrice'
import { AccommodationsSliderWithSkeleton } from '@/features/accommodations/AccommodationsSliderWithSkeleton'
import { AccommodationTypeEnum } from '@/features/accommodations/types'
import { PracticalInformation } from '@/features/common/practicalInformation/PracticalInformation'
import { UploadImageCategoryKeyEnum } from '@/features/common/uploadImage/types'
import { defaultLocale } from '@/features/i18n/config'
import { env } from '@/lib/env'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const metadata: Metadata = {
  title: SEO.accommodation.cabin.title,
  description: SEO.accommodation.cabin.description,
  openGraph: {
    title: `${SEO.accommodation.cabin.title} - ${ESTABLISHMENT_TITLE}`,
    description: SEO.accommodation.cabin.description,
    type: 'website',
    locale: defaultLocale,
    url: `${env.NEXT_PUBLIC_BASE_URL}/${SEO.accommodation.title.toLocaleLowerCase()}/${SEO.accommodation.cabin.title.toLocaleLowerCase()}`,
    siteName: ESTABLISHMENT_TITLE,
    images: [
      {
        url: '/cabin.jpg',
        width: 1200,
        height: 630
      }
    ]
  }
}

const Cabin = () => {
  const tCommon = useTranslations('Common')
  const tAccommodations = useTranslations('Accommodations')
  const tCabin = useTranslations('Cabin')

  const bookList = [{ title: 'Airbnb', href: 'https://abnb.me/z4L2e1aCBHb' }]

  return (
    <main className='w-full'>
      <AccommodationsHeader>
        <AccommodationsHeaderImage>
          <Image
            alt={`Main ${tCommon('cabin')} landscape`}
            src={headerImage}
            placeholder='blur'
            fill
            sizes='(max-width: 1024px) 100vw, 50vw'
            className='object-cover'
            priority
          />
        </AccommodationsHeaderImage>
        <AccommodationsHeaderContent>
          <Heading level={1} className='mt-4 lg:mt-0'>
            {tCommon('cabin')}
          </Heading>

          <Heading level={2} className='mt-10'>
            {tCommon('description')}
          </Heading>
          <P>{tCabin('cabinP1')}</P>
          <P className='italic'>{tCabin('cabinP2')}</P>

          <Heading level={2} className='mt-10'>
            {tCommon('price')}
          </Heading>

          <AccommodationsPrice
            accommodationType={AccommodationTypeEnum.CABIN}
            description={tAccommodations('averagePrice')}
          />

          <AccommodationsPopover bookList={bookList} />
        </AccommodationsHeaderContent>
      </AccommodationsHeader>

      <PracticalInformation />

      <AccommodationsSliderWithSkeleton
        title={tCabin('sliderTitle')}
        category={UploadImageCategoryKeyEnum.CabinSlider}
      />

      <OurGourmetOffer />
    </main>
  )
}

export default Cabin
