import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import P from '@/components/elements/P'
import forest from '@/components/images/homeCarousel/forest2.webp'
import HeroBanner from '@/components/modules/HeroBanner'
import Image from 'next/image'

const Activity1 = () => {
  return (
    <div className='w-full'>
      <HeroBanner
        title="Un terrain de jeux grandeur nature pour les amateurs de sports et d'aventure"
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
          Un terrain de jeux grandeur nature pour les amateurs de sports et d
          &apos;aventure
        </Heading>
        <P>
          {`
          La Corrèze est un vrai paradis pour les amoureux de nature et de
          sports en plein air. Vous pourrez explorer les nombreux sentiers de
          randonnée qui sillonnent la forêt, à la découverte d'une faune et
          d'une flore riches et variées. Partir à l'assaut des rivières en canoë
          ou kayak pour des sensations fortes garanties ou opter pour une
          session d'escalade et admirer les panoramas spectaculaires de la
          région.`}
        </P>
      </Container>
    </div>
  )
}
export default Activity1
