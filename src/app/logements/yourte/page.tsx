import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { SEO } from '@/_constants/SEO'
import headerImage from '@/assets/hutAndYurt/yurt-header.jpg'
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
  title: SEO.accommodation.yurt.title,
  description: SEO.accommodation.yurt.description,
  openGraph: {
    title: `${SEO.accommodation.yurt.title} - ${ESTABLISHMENT_TITLE}`,
    description: SEO.accommodation.yurt.description,
    type: 'website',
    locale: defaultLocale,
    url: `${env.NEXT_PUBLIC_BASE_URL}/${SEO.accommodation.title.toLocaleLowerCase()}/${SEO.accommodation.yurt.title.toLocaleLowerCase()}`,
    siteName: ESTABLISHMENT_TITLE,
    images: [
      {
        url: '/yurt.jpg',
        width: 1200,
        height: 630
      }
    ]
  }
}

const Yurt = () => {
  const tCommon = useTranslations('Common')
  const tAccommodations = useTranslations('Accommodations')
  const tYurt = useTranslations('Yurt')

  const bookList = [{ title: 'Airbnb', href: 'https://abnb.me/5guTmU7BBHb' }]

  return (
    <main className='w-full'>
      <AccommodationsHeader>
        <AccommodationsHeaderImage>
          <Image
            alt={`Main ${tCommon('yurt')} landscape`}
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
            {tCommon('yurt')}
          </Heading>

          <Heading level={2} className='mt-10'>
            {tCommon('description')}
          </Heading>
          <P>{tYurt('yurtP1')}</P>
          <P className='italic'>{tYurt('yurtP2')}</P>

          <Heading level={2} className='mt-10'>
            {tCommon('price')}
          </Heading>

          <AccommodationsPrice
            accommodationType={AccommodationTypeEnum.YURT}
            description={tAccommodations('averagePrice')}
          />

          <AccommodationsPopover bookList={bookList} />
        </AccommodationsHeaderContent>
      </AccommodationsHeader>

      <PracticalInformation />

      <AccommodationsSliderWithSkeleton
        title={tYurt('sliderTitle')}
        category={UploadImageCategoryKeyEnum.YurtSlider}
      />

      <OurGourmetOffer />
    </main>
  )
}

export default Yurt
