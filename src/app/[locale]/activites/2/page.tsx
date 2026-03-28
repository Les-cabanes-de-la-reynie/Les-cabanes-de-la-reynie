import forest from '@/assets/homeCarousel/forest5.webp'
import { generateLocaleStaticParams } from '@/shared/utils/generateLocaleStaticParams'
import { ESTABLISHMENT_TITLE } from '@/shared/_constants/establishmentInformation'
import { SEO } from '@/shared/_constants/SEO'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { HeroBanner } from '@/shared/components/HeroBanner'
import { P } from '@/shared/components/P'
import { env } from '@/shared/lib/env'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import Image from 'next/image'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params

  return {
    title: SEO.activity[2].title,
    alternates: {
      canonical: new URL(`/${locale}/activites/2`, env.NEXT_PUBLIC_BASE_URL),
      languages: {
        fr: `${env.NEXT_PUBLIC_BASE_URL}/fr/activites/2`,
        en: `${env.NEXT_PUBLIC_BASE_URL}/en/activites/2`
      }
    },
    openGraph: {
      title: `${SEO.activity[2].title} - ${ESTABLISHMENT_TITLE}`,
      description: SEO.activity.description,
      type: 'website',
      locale,
      siteName: ESTABLISHMENT_TITLE,
      images: [{ url: forest.src, width: forest.width, height: forest.height }]
    }
  }
}

export function generateStaticParams() {
  return generateLocaleStaticParams()
}

const Activity2 = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className='w-full'>
      <HeroBanner
        title='Un voyage culinaire au cœur du terroir corrézien et périgourdin'
        className='lg:h-[calc(75vh-4.5rem)]'
      >
        <Image
          alt='Paysage de forêt corrézienne au cœur du terroir gastronomique'
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
        <Heading level={2} className='text-center'>
          Un voyage culinaire au cœur du terroir corrézien et périgourdin
        </Heading>
        <P>
          Laissez-vous tenter par la gastronomie locale riche et savoureuse en
          goûtant aux spécialités corréziennes comme la tarte aux noix, le
          boudin noir (aux châtaignes) et la fameuse liqueur de noix, ou bien
          initiez-vous aux plaisirs de la truffe et du canard des voisins
          périgourdins. Explorez les marchés locaux et dégustez les produits
          frais et bio du terroir : fruits et légumes de saison, fromages
          fermiers, charcuterie artisanale, miel et confitures locales, tisanes…
        </P>
      </Container>
    </div>
  )
}

export default Activity2
