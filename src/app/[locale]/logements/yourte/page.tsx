import headerImage from '@/assets/cabinAndYurt/yurt-header.webp'
import { AccommodationsHeader } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeader'
import { AccommodationsHeaderContent } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeaderContent'
import { AccommodationsHeaderImage } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeaderImage'
import { AccommodationsPopover } from '@/features/accommodations/components/AccommodationsPopover'
import { YurtAccommodationSlider } from '@/features/accommodations/yurt/components/YurtAccommodationSlider'
import { YurtPrice } from '@/features/accommodations/yurt/components/YurtPrice'
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
    title: SEO.accommodation.yurt.title,
    description: SEO.accommodation.yurt.description,
    alternates: {
      canonical: new URL(
        `/${locale}/logements/yourte`,
        env.NEXT_PUBLIC_BASE_URL
      ),
      languages: {
        fr: `${env.NEXT_PUBLIC_BASE_URL}/fr/logements/yourte`,
        en: `${env.NEXT_PUBLIC_BASE_URL}/en/logements/yourte`
      }
    },
    openGraph: {
      title: `${SEO.accommodation.yurt.title} - ${ESTABLISHMENT_TITLE}`,
      description: SEO.accommodation.yurt.description,
      type: 'website',
      locale,
      url: `${env.NEXT_PUBLIC_BASE_URL}/${locale}/logements/yourte`,
      siteName: ESTABLISHMENT_TITLE,
      images: [
        {
          url: '/yurt.jpg',
          width: 1200,
          height: 630
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${SEO.accommodation.yurt.title} - ${ESTABLISHMENT_TITLE}`,
      description: SEO.accommodation.yurt.description
    }
  }
}

export default async function Yurt({ params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const tCommon = await getTranslations('Common')
  const tYurt = await getTranslations('Yurt')

  const bookList = [{ title: 'Airbnb', href: 'https://abnb.me/5guTmU7BBHb' }]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Accommodation',
    name: `${tCommon('yurt')} — ${ESTABLISHMENT_TITLE}`,
    description: SEO.accommodation.yurt.description,
    url: `${env.NEXT_PUBLIC_BASE_URL}/${locale}/logements/yourte`,
    image: `${env.NEXT_PUBLIC_BASE_URL}/yurt.jpg`,
    occupancy: { '@type': 'QuantitativeValue', maxValue: 6 },
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

          <YurtPrice />

          <AccommodationsPopover bookList={bookList} />
        </AccommodationsHeaderContent>
      </AccommodationsHeader>

      <PracticalInformation />

      <Suspense fallback={<Loader />}>
        <YurtAccommodationSlider />
      </Suspense>

      <OurGourmetOffer />
    </main>
  )
}
