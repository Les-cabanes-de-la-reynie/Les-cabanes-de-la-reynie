import forest from '@/assets/homeCarousel/forest2.webp'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { P } from '@/shared/components/P'
import { pageAlternates } from '@/shared/lib/seo'
import { Metadata } from 'next'
import { getLocale, getTranslations } from 'next-intl/server'
import { ActivityCardList } from './components/ActivityCardList'

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale()
  const tSEO = await getTranslations('SEO')

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

const Activites = async () => {
  const tActivities = await getTranslations('Activities')
  const tSEOIntro = await getTranslations('SEO')

  return (
    <Container>
      <section>
        <Heading level={1} className='my-8 text-center'>
          {tActivities('indexTitle')}
        </Heading>

        <P className='mx-auto mb-8 max-w-prose text-center'>
          {tSEOIntro('activity.description')}
        </P>

        <ActivityCardList />
      </section>
    </Container>
  )
}

export default Activites
