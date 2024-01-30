import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import forest1 from '@/components/images/homeCarousel/forest.webp'
import forest2 from '@/components/images/homeCarousel/forest2.webp'
import forest3 from '@/components/images/homeCarousel/forest3.webp'
import forest4 from '@/components/images/homeCarousel/forest4.webp'
import forest5 from '@/components/images/homeCarousel/forest5.webp'
import ActivitiesCard from '@/components/modules/ActivitiesCard'
import { env } from '@/lib/env'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'

export async function generateStaticParams() {
  return env.NEXT_PUBLIC_LANGS.map(locale => ({ locale }))
}

export async function generateMetadata({
  params: { locale }
}: {
  params: { locale: string }
}) {
  const t = await getTranslations({ locale, namespace: 'Common' })

  return {
    title: t('activities')
  }
}

const Activites = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  return (
    <Container>
      <section>
        <Heading level={1} className='my-8 text-center'>
          ACTIVITES
        </Heading>
        <Heading level={2} className='mb-4 mt-8'>
          Que faire dans le Perigord
        </Heading>
        <ul className='grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ActivitiesCard
            title='Que faire dans le Perigord Vert'
            image={forest1}
            alt='Paysage du Perigord Vert'
          />
          <ActivitiesCard
            title='Que faire dans le Perigord Blanc'
            image={forest2}
            alt='Paysage du Perigord Blanc'
          />
          <ActivitiesCard
            title='Que faire dans le Perigord Noir'
            image={forest3}
            alt='Paysage du Perigord Noir'
          />
          <ActivitiesCard
            title='Que faire dans le Perigord Pourpre'
            image={forest4}
            alt='Paysage du Perigord Pourpre'
          />
          <ActivitiesCard
            title='Que faire dans le Perigord Bleu'
            image={forest5}
            alt='Paysage du Perigord Bleu'
          />
        </ul>
      </section>
    </Container>
  )
}

export default Activites
