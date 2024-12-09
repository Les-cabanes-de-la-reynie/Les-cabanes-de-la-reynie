import { SEO } from '@/_constants/SEO'
import forest from '@/assets/homeCarousel/forest5.webp'
import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { HeroBanner } from '@/components/HeroBanner'
import { P } from '@/components/P'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: SEO.activity[2].title
}

const Activity2 = () => {
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
