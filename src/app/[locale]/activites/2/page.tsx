import forest from '@/assets/homeCarousel/forest5.webp'
import { generateLocaleStaticParams } from '@/shared/utils/generateLocaleStaticParams'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { ActivityPager } from '../components/ActivityPager'
import { Container } from '@/shared/components/Container'
import { HeroBanner } from '@/shared/components/HeroBanner'
import { P } from '@/shared/components/P'
import { env } from '@/shared/lib/env'
import { pageAlternates } from '@/shared/lib/seo'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Image from 'next/image'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const tSEO = await getTranslations({ locale, namespace: 'SEO' })

  return {
    title: tSEO('activity.2.title'),
    description: tSEO('activity.description'),
    alternates: pageAlternates(locale, '/activites/2'),
    openGraph: {
      title: `${tSEO('activity.2.title')} - ${ESTABLISHMENT_TITLE}`,
      description: tSEO('activity.description'),
      type: 'website',
      locale,
      siteName: ESTABLISHMENT_TITLE,
      images: [{ url: forest.src, width: forest.width, height: forest.height }]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tSEO('activity.2.title')} - ${ESTABLISHMENT_TITLE}`,
      description: tSEO('activity.description')
    }
  }
}

export function generateStaticParams() {
  return generateLocaleStaticParams()
}

const Activity2 = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale)

  const tSEO = await getTranslations('SEO')
  const tActivities = await getTranslations('Activities')

  return (
    <div className='w-full'>
      <HeroBanner
        title={tSEO('activity.2.title')}
        className='lg:h-[calc(75vh-4.5rem)]'
      >
        <Image
          alt={tActivities('a2.imageAlt')}
          src={forest}
          placeholder='blur'
          fill
          sizes='100vw'
          className='object-cover'
          loading='eager'
          fetchPriority='high'
        />
      </HeroBanner>

      <Container>
        <P>{tActivities('a2.body')}</P>
      </Container>

      <ActivityPager current={2} />
    </div>
  )
}

export default Activity2
