import homeBannerImage from '@/assets/cabinAndYurt/home-banner.webp'
import { AccommodationsCardList } from '@/features/accommodations/components/AccommodationsCardList'
import { AccommodationsDescription } from '@/features/accommodations/components/AccommodationsDescription'
import { BookingSection } from '@/features/accommodations/components/BookingSection'
import { HomeAccommodationSlider } from '@/features/accommodations/components/HomeAccommodationSlider'
import { routing } from '@/i18n/routing'
import { AIRBNB_LISTINGS } from '@/shared/_constants/bookings'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { HeroBanner } from '@/shared/components/HeroBanner'
import { IntroduceLesCabanesDeLaReynie } from '@/shared/components/IntroduceLesCabanesDeLaReynie'
import { Loader } from '@/shared/components/Loader'
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
  const tSEO = await getTranslations({ locale, namespace: 'SEO' })

  return {
    title: tSEO('home.documentTitle'),
    description: tSEO('home.description'),
    alternates: {
      canonical: new URL(`/${locale}`, env.NEXT_PUBLIC_BASE_URL),
      languages: {
        fr: `${env.NEXT_PUBLIC_BASE_URL}/fr`,
        en: `${env.NEXT_PUBLIC_BASE_URL}/en`
      }
    },
    openGraph: {
      title: `${tSEO('home.documentTitle')} - ${ESTABLISHMENT_TITLE}`,
      description: tSEO('home.description'),
      type: 'website',
      locale,
      url: `${env.NEXT_PUBLIC_BASE_URL}/${locale}`,
      siteName: ESTABLISHMENT_TITLE,
      images: [{ url: '/yurt.jpg', width: 1200, height: 630 }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${ESTABLISHMENT_TITLE} | ${tSEO('home.title')}`,
      description: tSEO('home.description')
    }
  }
}

export default async function Home({ params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const tHome = await getTranslations('Home')
  const tCommon = await getTranslations('Common')

  return (
    <div className='w-full lg:-mt-18'>
      <HeroBanner
        title={ESTABLISHMENT_TITLE}
        subtitle={tHome('heroSubtitle')}
        className='relative'
        callToActionText={tHome('CTA')}
        bookingHref={AIRBNB_LISTINGS.yurt}
        bookingText={tCommon('bookOnAirbnb')}
      >
        <Image
          alt={tHome('heroAlt')}
          src={homeBannerImage}
          placeholder='blur'
          fill
          sizes='100vw'
          className='object-cover'
          loading='eager'
          fetchPriority='high'
          preload
        />
      </HeroBanner>

      <IntroduceLesCabanesDeLaReynie />

      {/* No bg-fixed: broken on iOS Safari (zoomed/frozen rendering) */}
      <div className='mb-8 h-96 w-full bg-(image:--home-parallax-image) bg-cover bg-center bg-no-repeat md:mb-10' />

      <Suspense fallback={<Loader />}>
        <HomeAccommodationSlider />
      </Suspense>

      <Container>
        <Heading id='our-services' level={2}>
          {tHome('ourAccommodations')}
        </Heading>
        <AccommodationsCardList />
      </Container>

      <AccommodationsDescription />

      <BookingSection />
    </div>
  )
}
