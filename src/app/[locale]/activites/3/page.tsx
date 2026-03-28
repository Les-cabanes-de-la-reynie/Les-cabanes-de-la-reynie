import forest from '@/assets/homeCarousel/forest4.webp'
import { routing } from '@/i18n/routing'
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
    title: SEO.activity[3].title,
    alternates: {
      canonical: new URL(`/${locale}/activites/3`, env.NEXT_PUBLIC_BASE_URL),
      languages: {
        fr: `${env.NEXT_PUBLIC_BASE_URL}/fr/activites/3`,
        en: `${env.NEXT_PUBLIC_BASE_URL}/en/activites/3`
      }
    },
    openGraph: {
      title: `${SEO.activity[3].title} - ${ESTABLISHMENT_TITLE}`,
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

const Activity3 = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className='w-full'>
      <HeroBanner
        title="Sur les traces de l'histoire en Corrèze et en Dordogne"
        className='lg:h-[calc(75vh-4.5rem)]'
      >
        <Image
          alt='Forêt et paysage historique de Corrèze et Dordogne'
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
