import { MapSection } from '@/features/map/MapSection'
import { OpeningHoursSection } from '@/features/openingHours/components/OpeningHoursSection'
import { routing } from '@/i18n/routing'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { SEO } from '@/shared/_constants/SEO'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { env } from '@/shared/lib/env'
import { Metadata } from 'next'
import { hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: SEO.contact.title,
    description: SEO.contact.description,
    alternates: {
      canonical: new URL(`/${locale}/contact`, env.NEXT_PUBLIC_BASE_URL),
      languages: {
        fr: `${env.NEXT_PUBLIC_BASE_URL}/fr/contact`,
        en: `${env.NEXT_PUBLIC_BASE_URL}/en/contact`
      }
    },
    openGraph: {
      title: `${SEO.contact.title} - ${ESTABLISHMENT_TITLE}`,
      description: SEO.contact.description,
      type: 'website',
      locale,
      url: `${env.NEXT_PUBLIC_BASE_URL}/${locale}/contact`,
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
      title: `${SEO.contact.title} - ${ESTABLISHMENT_TITLE}`,
      description: SEO.contact.description
    }
  }
}

export default async function Contact({ params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  const t = await getTranslations('Contact')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: ESTABLISHMENT_TITLE,
    description: SEO.contact.description,
    url: env.NEXT_PUBLIC_BASE_URL,
    image: `${env.NEXT_PUBLIC_BASE_URL}/yurt.jpg`,
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Corrèze',
      addressCountry: 'FR'
    }
  }

  return (
    <Container>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Heading level={1} className='my-8'>
        {t('contactMainTitle')}
      </Heading>

      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        <OpeningHoursSection editable={false} />

        <MapSection />
      </div>
    </Container>
  )
}
