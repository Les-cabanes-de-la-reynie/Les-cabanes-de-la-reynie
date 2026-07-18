import cabinImageFront from '@/assets/cabinAndYurt/home-cabin-front.webp'
import headerImage from '@/assets/cabinAndYurt/yurt-header.webp'
import { AccommodationsHeader } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeader'
import { AccommodationsHeaderContent } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeaderContent'
import { AccommodationsHeaderImage } from '@/features/accommodations/components/AccommodationsHeader/AccommodationsHeaderImage'
import { BookingLinks } from '@/features/accommodations/components/BookingLinks'
import { PracticalInformation } from '@/features/accommodations/components/practicalInformation/PracticalInformation'
import { YurtAccommodationSlider } from '@/features/accommodations/yurt/components/YurtAccommodationSlider'
import { YurtPrice } from '@/features/accommodations/yurt/components/YurtPrice'
import { routing } from '@/i18n/routing'
import { YURT_BOOK_LIST } from '@/shared/_constants/bookings'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { Loader } from '@/shared/components/Loader'
import { OurGourmetOffer } from '@/shared/components/ourGourmetOffer/OurGourmetOffer'
import { P } from '@/shared/components/P'
import { PhotoLinkBanner } from '@/shared/components/PhotoLinkBanner'
import { env } from '@/shared/lib/env'
import { localizedUrl, pageAlternates } from '@/shared/lib/seo'
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
  const tSEO = await getTranslations({ locale, namespace: 'SEO' })

  return {
    title: tSEO('accommodation.yurt.title'),
    description: tSEO('accommodation.yurt.description'),
    alternates: pageAlternates(locale, '/logements/yourte'),
    openGraph: {
      title: `${tSEO('accommodation.yurt.title')} - ${ESTABLISHMENT_TITLE}`,
      description: tSEO('accommodation.yurt.description'),
      type: 'website',
      locale,
      url: localizedUrl(locale, '/logements/yourte'),
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
      title: `${tSEO('accommodation.yurt.title')} - ${ESTABLISHMENT_TITLE}`,
      description: tSEO('accommodation.yurt.description')
    }
  }
}

export default async function Yurt({ params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const tSEO = await getTranslations('SEO')

  const tCommon = await getTranslations('Common')
  const tAccommodations = await getTranslations('Accommodations')
  const tHome = await getTranslations('Home')
  const tYurt = await getTranslations('Yurt')


  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Accommodation',
    name: `${tCommon('yurt')} — ${ESTABLISHMENT_TITLE}`,
    description: tSEO('accommodation.yurt.description'),
    url: localizedUrl(locale, '/logements/yourte'),
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
            loading='eager'
            fetchPriority='high'
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

          <BookingLinks bookList={YURT_BOOK_LIST} className='mt-10' />
        </AccommodationsHeaderContent>
      </AccommodationsHeader>

      <PracticalInformation />

      <Suspense fallback={<Loader />}>
        <YurtAccommodationSlider />
      </Suspense>

      <OurGourmetOffer />

      <Container>
        <PhotoLinkBanner
          href={PAGE_ROUTES.accommodation.cabin}
          image={cabinImageFront}
          imageAlt={tHome('cabinAltFront')}
          title={tAccommodations('seeAlsoCabin')}
        />
      </Container>
    </main>
  )
}
