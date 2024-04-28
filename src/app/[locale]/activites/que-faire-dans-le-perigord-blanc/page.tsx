import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import forest from '@/components/images/homeCarousel/forest2.webp'
import HeroBanner from '@/components/modules/HeroBanner'
import Image from 'next/image'

const QueFaireDansLePerigordBlanc = () => {
  return (
    <div className='w-full'>
      <HeroBanner
        title='Que faire dans le Perigord Blanc'
        className='lg:h-[calc(75vh-4.5rem)]'
      >
        <Image
          alt='Paysage typique dans le Perigord Blanc'
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
          Le Périgord Vert est très connu pour ses 2 villes : Brantôme et
          Nontron.
        </Heading>
        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas
          architecto eaque deleniti? Et sit deleniti accusantium magnam
          voluptatum consequatur corporis porro quod autem fuga dolore
          dignissimos placeat, quia voluptas!Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Hic voluptas architecto eaque deleniti?
          Et sit deleniti accusantium magnam voluptatum consequatur corporis
          porro quod autem fuga dolore dignissimos placeat, quia voluptas!
        </P>

        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas
          architecto eaque deleniti? Et sit deleniti accusantium magnam
          voluptatum consequatur corporis porro quod autem fuga dolore
          dignissimos placeat, quia voluptas!
        </P>

        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas
          architecto eaque deleniti? Et sit deleniti accusantium magnam
          voluptatum consequatur corporis porro quod autem fuga dolore
          dignissimos placeat, quia voluptas! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Hic voluptas architecto eaque deleniti?
          Et sit deleniti accusantium magnam voluptatum consequatur corporis
          porro quod autem fuga dolore dignissimos placeat, quia voluptas!
        </P>

        <P>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic voluptas
          architecto eaque deleniti? Et sit deleniti accusantium magnam
          voluptatum consequatur corporis porro quod autem fuga dolore
          dignissimos placeat, quia voluptas!
        </P>
      </Container>
    </div>
  )
}
export default QueFaireDansLePerigordBlanc
