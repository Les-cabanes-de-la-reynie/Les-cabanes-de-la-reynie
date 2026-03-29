import homeBannerImage from '@/assets/cabinAndYurt/home-banner.webp'
import { AccommodationsCardList } from '@/features/accommodations/components/AccommodationsCardList'
import { AccommodationsDescription } from '@/features/accommodations/components/AccommodationsDescription'
import { HomeAccommodationSlider } from '@/features/accommodations/components/HomeAccommodationSlider'
import { routing } from '@/i18n/routing'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { SEO } from '@/shared/_constants/SEO'
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

  return {
    title: SEO.home.documentTitle,
    description: SEO.home.description,
    alternates: {
      canonical: new URL(`/${locale}`, env.NEXT_PUBLIC_BASE_URL),
      languages: {
        fr: `${env.NEXT_PUBLIC_BASE_URL}/fr`,
        en: `${env.NEXT_PUBLIC_BASE_URL}/en`
      }
    },
    openGraph: {
      title: `${SEO.home.documentTitle} - ${ESTABLISHMENT_TITLE}`,
      description: SEO.home.description,
      type: 'website',
      locale,
      url: `${env.NEXT_PUBLIC_BASE_URL}/${locale}`,
      siteName: ESTABLISHMENT_TITLE,
      images: [{ url: '/yurt.jpg', width: 1200, height: 630 }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${ESTABLISHMENT_TITLE} | ${SEO.home.title}`,
      description: SEO.home.description
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

  return (
    <div className='w-full lg:-mt-18'>
      <HeroBanner
        title={ESTABLISHMENT_TITLE}
        className='select-none relative'
        callToActionText={tHome('CTA')}
      >
        <Image
          alt='Paysage typique dans "Les cabanes de la Reynie"'
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

      <div className='mb-8 h-96 w-full select-none bg-(image:--home-parallax-image) bg-cover bg-fixed bg-center bg-no-repeat md:mb-10' />

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
    </div>
  )
}
