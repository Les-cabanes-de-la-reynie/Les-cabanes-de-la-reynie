import headerImage from '@/assets/cabinAndYurt/yurt-header.webp'
import { AccommodationsHeader } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeader'
import { AccommodationsHeaderContent } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeaderContent'
import { AccommodationsHeaderImage } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeaderImage'
import { AccommodationsPopover } from '@/features/accommodations/components/AccommodationsPopover'
import { getYurtOptions } from '@/features/accommodations/yurt/infrastructure/getYurtOptions'
import { YurtAccommodationSlider } from '@/features/accommodations/yurt/YurtAccommodationSlider'
import { YurtPrice } from '@/features/accommodations/yurt/YurtPrice'
import { defaultLocale } from '@/features/i18n/config'
import { PracticalInformation } from '@/features/shared/practicalInformation/PracticalInformation'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { SEO } from '@/shared/_constants/SEO'
import { Heading } from '@/shared/components/Heading'
import { OurGourmetOffer } from '@/shared/components/ourGourmetOffer/OurGourmetOffer'
import { P } from '@/shared/components/P'
import { env } from '@/shared/lib/env'
import { getQueryClient } from '@/shared/lib/get-query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
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
  const tYurt = useTranslations('Yurt')

  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(getYurtOptions)

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

          <HydrationBoundary state={dehydrate(queryClient)}>
            <YurtPrice />
          </HydrationBoundary>

          <AccommodationsPopover bookList={bookList} />
        </AccommodationsHeaderContent>
      </AccommodationsHeader>

      <PracticalInformation />

      <YurtAccommodationSlider />

      <OurGourmetOffer />
    </main>
  )
}

export default Yurt
