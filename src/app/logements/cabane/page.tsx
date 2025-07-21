import headerImage from '@/assets/cabinAndYurt/cabin-header.webp'
import { CabinAccommodationSlider } from '@/features/accommodations/cabin/CabinAccommodationSlider'
import { CabinPrice } from '@/features/accommodations/cabin/CabinPrice'
import { getCabinOptions } from '@/features/accommodations/cabin/infrastructure/getCabinOptions'
import { AccommodationsHeader } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeader'
import { AccommodationsHeaderContent } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeaderContent'
import { AccommodationsHeaderImage } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeaderImage'
import { AccommodationsPopover } from '@/features/accommodations/components/AccommodationsPopover'
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
  const tCabin = useTranslations('Cabin')

  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(getCabinOptions)

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

          <HydrationBoundary state={dehydrate(queryClient)}>
            <CabinPrice />
          </HydrationBoundary>

          <AccommodationsPopover bookList={bookList} />
        </AccommodationsHeaderContent>
      </AccommodationsHeader>

      <PracticalInformation />

      <CabinAccommodationSlider />

      <OurGourmetOffer />
    </main>
  )
}

export default Cabin
