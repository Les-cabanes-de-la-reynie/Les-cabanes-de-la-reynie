import forest from '@/assets/homeCarousel/forest2.webp'
import { routing } from '@/i18n/routing'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { SEO } from '@/shared/_constants/SEO'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { env } from '@/shared/lib/env'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { ActivityCardList } from './components/ActivityCardList'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: SEO.activity.title,
    description: SEO.activity.description,
    alternates: {
      canonical: new URL(`/${locale}/activites`, env.NEXT_PUBLIC_BASE_URL),
      languages: {
        fr: `${env.NEXT_PUBLIC_BASE_URL}/fr/activites`,
        en: `${env.NEXT_PUBLIC_BASE_URL}/en/activites`
      }
    },
    openGraph: {
      title: `${SEO.activity.title} - ${ESTABLISHMENT_TITLE}`,
      description: SEO.activity.description,
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

  return (
    <Container>
      <section>
        <Heading level={1} className='my-8 text-center'>
          ACTIVITES
        </Heading>

        <ActivityCardList />
      </section>
    </Container>
  )
}

export default Activites
