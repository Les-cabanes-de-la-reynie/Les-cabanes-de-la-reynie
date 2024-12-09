import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import { SEO } from '@/_constants/SEO'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Loader } from '@/components/Loader'
import { defaultLocale } from '@/features/i18n/config'
import { OpeningHoursSection } from '@/features/openingHours/OpeningHoursSection'
import { env } from '@/lib/env'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: SEO.contact.title,
  description: SEO.contact.description,
  openGraph: {
    title: `${SEO.contact.title} - ${ESTABLISHMENT_TITLE}`,
    description: SEO.contact.description,
    type: 'website',
    locale: defaultLocale,
    url: `${env.NEXT_PUBLIC_BASE_URL}/${SEO.contact.title.toLocaleLowerCase()}`,
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

// ⚠️: .then() is needed because the component is not exported with the default keyword
const MapWithNoSSR = dynamic(
  () =>
    import('../../features/map/MapSection').then(module => module.MapSection),
  {
    ssr: false,
    loading: () => <Loader />
  }
)

const Contact = () => {
  const t = useTranslations('Contact')

  return (
    <Container>
      <Heading level={1} className='my-8'>
        {t('contactMainTitle')}
      </Heading>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        <OpeningHoursSection editable={false} />

        <MapWithNoSSR />
      </div>
    </Container>
  )
}

export default Contact
