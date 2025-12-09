import forest from '@/assets/homeCarousel/forest5.webp'
import { routing } from '@/i18n/routing'
import { SEO } from '@/shared/_constants/SEO'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { HeroBanner } from '@/shared/components/HeroBanner'
import { P } from '@/shared/components/P'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import Image from 'next/image'

export const metadata: Metadata = {
  title: SEO.activity[2].title
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
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
          alt='TODO'
          src={forest}
          placeholder='blur'
          fill
          sizes='100vw'
          className='object-cover'
          priority
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
