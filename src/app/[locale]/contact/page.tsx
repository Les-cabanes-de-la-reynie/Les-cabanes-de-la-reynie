import { ESTABLISHMENT_TITLE } from '@/_constants/establishmentInformation'
import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import LocationSection from '@/components/modules/Location/LocationSection'
import OpeningHoursSection from '@/components/modules/OpeningHours/OpeningHoursSection'
import { env } from '@/lib/env'
import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

export async function generateStaticParams() {
  return env.NEXT_PUBLIC_LANGS.map(locale => ({ locale }))
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const tCommon = await getTranslations({ locale, namespace: 'Common' })
  const tSEO = await getTranslations({ locale, namespace: 'SEO' })

  return {
    title: tCommon('contact'),
    description: tSEO('contactDescription'),
    openGraph: {
      title: `${tCommon('contact')} - ${ESTABLISHMENT_TITLE}`,
      description: tSEO('contactDescription'),
      type: 'website',
      locale: locale,
      url: `${env.NEXT_PUBLIC_BASE_URL}/${locale}/${tCommon('contact').toLocaleLowerCase()}`,
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
}

const Contact = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Contact')

  return (
    <Container>
      <Heading level={1} className='my-8'>
        {t('contactMainTitle')}
      </Heading>
      <div className='grid grid-cols-1 gap-8 lg:grid-cols-2'>
        <OpeningHoursSection editable={false} />

        <LocationSection />
      </div>
    </Container>
  )
}

export default Contact
