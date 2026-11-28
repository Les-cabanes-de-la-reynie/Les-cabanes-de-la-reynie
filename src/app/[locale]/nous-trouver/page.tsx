import { getAddress } from '@/features/address/infrastructure/queries/getAddress'
import { OpeningHoursSection } from '@/features/openingHours/components/OpeningHoursSection'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import {
  ESTABLISHMENT_POSITION,
  FRENCH_PHONE_CODE
} from '@/shared/components/map/_const'
import { MapSection } from '@/shared/components/map/MapSection'
import { env } from '@/shared/lib/env'
import { localizedUrl, pageAlternates } from '@/shared/lib/seo'
import { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const tSEO = await getTranslations('SEO')

  return {
    title: tSEO('findUs.title'),
    description: tSEO('findUs.description'),
    alternates: pageAlternates(locale, '/nous-trouver'),
    openGraph: {
      title: `${tSEO('findUs.title')} - ${ESTABLISHMENT_TITLE}`,
      description: tSEO('findUs.description'),
      type: 'website',
      locale,
      url: localizedUrl(locale, '/nous-trouver'),
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
      title: `${tSEO('findUs.title')} - ${ESTABLISHMENT_TITLE}`,
      description: tSEO('findUs.description')
    }
  }
}

export default async function FindUs() {
  const tSEO = await getTranslations('SEO')

  const t = await getTranslations('FindUs')

  const address = await getAddress()
  const [latitude, longitude] = ESTABLISHMENT_POSITION

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: ESTABLISHMENT_TITLE,
    description: tSEO('findUs.description'),
    url: env.NEXT_PUBLIC_BASE_URL,
    image: `${env.NEXT_PUBLIC_BASE_URL}/yurt.jpg`,
    telephone: `+${FRENCH_PHONE_CODE}${address.phone.trim().slice(1)}`,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Corrèze',
      addressCountry: 'FR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude,
      longitude
    }
  }

  return (
    <Container>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Heading level={1} className='my-8'>
        {t('mainTitle')}
      </Heading>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        <OpeningHoursSection editable={false} />

        <MapSection />
      </div>
    </Container>
  )
}
