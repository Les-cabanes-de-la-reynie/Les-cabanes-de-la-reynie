import forest from '@/assets/homeCarousel/forest2.webp'
import { routing } from '@/i18n/routing'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { env } from '@/shared/lib/env'
import { pageAlternates } from '@/shared/lib/seo'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { ActivityCardList } from './components/ActivityCardList'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const tSEO = await getTranslations({ locale, namespace: 'SEO' })

  return {
    title: tSEO('activity.title'),
    description: tSEO('activity.description'),
    alternates: pageAlternates(locale, '/activites'),
    openGraph: {
      title: `${tSEO('activity.title')} - ${ESTABLISHMENT_TITLE}`,
      description: tSEO('activity.description'),
      type: 'website',
      locale,
      siteName: ESTABLISHMENT_TITLE,
      images: [{ url: forest.src, width: forest.width, height: forest.height }]
    }
  }
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

const Activites = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale)

  const tActivities = await getTranslations('Activities')

  return (
    <Container>
      <section>
        <Heading level={1} className='my-8 text-center'>
          {tActivities('indexTitle')}
        </Heading>

        <ActivityCardList />
      </section>
    </Container>
  )
}

export default Activites
