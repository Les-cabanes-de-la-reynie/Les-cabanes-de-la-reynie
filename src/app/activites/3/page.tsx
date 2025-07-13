import forest from '@/assets/homeCarousel/forest4.webp'
import { SEO } from '@/shared/_constants/SEO'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { HeroBanner } from '@/shared/components/HeroBanner'
import { P } from '@/shared/components/P'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: SEO.activity[3].title
}

const Activity3 = () => {
  return (
    <div className='w-full'>
      <HeroBanner
        title="Sur les traces de l'histoire en Corrèze et en Dordogne"
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
          {`Sur les traces de l'histoire en Corrèze et en Dordogne`}
        </Heading>
        <P>
          {`Plongez dans l'histoire fascinante de la Corrèze et de ses environs. Visitez les nombreux villages pittoresques aux maisons de grès rouge et aux toits de lauzes, comme Turenne, Collonges-la-Rouge ou Curemonte. Explorez les châteaux médiévaux qui ponctuent le paysage, comme le château de Ventadour. Partez à la découverte des sites historiques de la Dordogne et de la vallée de la Vézère, comme les grottes de Lascaux et les villages de Sarlat-la-Canéda et Rocamadour (Lot). Laissez-vous transporter par l'atmosphère unique de ces lieux chargés d'histoire et admirez les vestiges du passé, témoins de la richesse du patrimoine culturel de la région.`}
        </P>
      </Container>
    </div>
  )
}
export default Activity3
