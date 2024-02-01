import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import forest from '@/components/images/homeCarousel/forest4.webp'
import HeroBanner from '@/components/modules/HeroBanner'
import Image from 'next/image'

const QueFaireDansLePerigordNoir = () => {
  return (
    <div className='w-full'>
      <HeroBanner
        title='Que faire dans le Perigord Noir'
        className='lg:h-[30rem]'
      >
        <Image
          alt='Paysage typique dans le Perigord Noir'
          src={forest}
          placeholder='blur'
          fill
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
export default QueFaireDansLePerigordNoir
