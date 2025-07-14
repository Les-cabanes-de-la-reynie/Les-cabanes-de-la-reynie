import { defaultLocale } from '@/features/i18n/config'
import { ContactMapSection } from '@/features/map/ContactMapSection'
import { OpeningHoursSection } from '@/features/openingHours/OpeningHoursSection'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { SEO } from '@/shared/_constants/SEO'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { env } from '@/shared/lib/env'
import { getQueryClient } from '@/shared/lib/get-query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'

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

const Contact = () => {
  const t = useTranslations('Contact')
  const queryClient = getQueryClient()

  return (
    <Container>
      <Heading level={1} className='my-8'>
        {t('contactMainTitle')}
      </Heading>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        <OpeningHoursSection editable={false} />

        <HydrationBoundary state={dehydrate(queryClient)}>
          <ContactMapSection />
        </HydrationBoundary>
      </div>
    </Container>
  )
}

export default Contact
