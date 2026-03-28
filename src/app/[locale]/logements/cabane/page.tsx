import headerImage from '@/assets/cabinAndYurt/cabin-header.webp'
import { CabinAccommodationSlider } from '@/features/accommodations/cabin/components/CabinAccommodationSlider'
import { CabinPrice } from '@/features/accommodations/cabin/components/CabinPrice'
import { AccommodationsHeader } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeader'
import { AccommodationsHeaderContent } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeaderContent'
import { AccommodationsHeaderImage } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeaderImage'
import { AccommodationsPopover } from '@/features/accommodations/components/AccommodationsPopover'
import { PracticalInformation } from '@/features/shared/practicalInformation/PracticalInformation'
import { routing } from '@/i18n/routing'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { SEO } from '@/shared/_constants/SEO'
import { Heading } from '@/shared/components/Heading'
import { Loader } from '@/shared/components/Loader'
import { OurGourmetOffer } from '@/shared/components/ourGourmetOffer/OurGourmetOffer'
import { P } from '@/shared/components/P'
import { env } from '@/shared/lib/env'
import { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Suspense } from 'react'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: SEO.accommodation.cabin.title,
    description: SEO.accommodation.cabin.description,
    alternates: {
      canonical: new URL(
        `/${locale}/logements/cabane`,
        env.NEXT_PUBLIC_BASE_URL
      ),
      languages: {
        fr: `${env.NEXT_PUBLIC_BASE_URL}/fr/logements/cabane`,
        en: `${env.NEXT_PUBLIC_BASE_URL}/en/logements/cabane`
      }
    },
    openGraph: {
      title: `${SEO.accommodation.cabin.title} - ${ESTABLISHMENT_TITLE}`,
      description: SEO.accommodation.cabin.description,
      type: 'website',
      locale,
      url: `${env.NEXT_PUBLIC_BASE_URL}/${locale}/logements/cabane`,
      siteName: ESTABLISHMENT_TITLE,
      images: [
        {
          url: '/cabin.jpg',
          width: 1200,
          height: 630
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SEO.accommodation.cabin.title} - ${ESTABLISHMENT_TITLE}`,
      description: SEO.accommodation.cabin.description
    }
  }
}

export default async function Cabin({ params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const tCommon = await getTranslations('Common')
  const tCabin = await getTranslations('Cabin')

  const bookList = [{ title: 'Airbnb', href: 'https://abnb.me/z4L2e1aCBHb' }]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Accommodation',
    name: `${tCommon('cabin')} — ${ESTABLISHMENT_TITLE}`,
    description: SEO.accommodation.cabin.description,
    url: `${env.NEXT_PUBLIC_BASE_URL}/${locale}/logements/cabane`,
    image: `${env.NEXT_PUBLIC_BASE_URL}/cabin.jpg`,
    occupancy: { '@type': 'QuantitativeValue', maxValue: 2 },
    containedInPlace: {
      '@type': 'LodgingBusiness',
      name: ESTABLISHMENT_TITLE,
      url: env.NEXT_PUBLIC_BASE_URL
    }
  }

  return (
    <main className='w-full'>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AccommodationsHeader>
        <AccommodationsHeaderImage>
          <Image
            alt={`Main ${tCommon('cabin')} landscape`}
            src={headerImage}
            placeholder='blur'
            fill
            sizes='(max-width: 1024px) 100vw, 50vw'
            className='object-cover'
            loading='eager'
            fetchPriority='high'
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

          <CabinPrice />

          <AccommodationsPopover bookList={bookList} />
        </AccommodationsHeaderContent>
      </AccommodationsHeader>

      <PracticalInformation />

      <Suspense fallback={<Loader />}>
        <CabinAccommodationSlider />
      </Suspense>

      <OurGourmetOffer />
    </main>
  )
}
