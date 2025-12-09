import forest from '@/assets/homeCarousel/forest2.webp'
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
  title: SEO.activity[1].title
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

const Activity1 = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale)

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
