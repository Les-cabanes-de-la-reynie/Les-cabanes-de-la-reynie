import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import forest1 from '@/components/images/homeCarousel/forest.webp'
import forest2 from '@/components/images/homeCarousel/forest2.webp'
import forest3 from '@/components/images/homeCarousel/forest3.webp'
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
  const tCommon = await getTranslations({ locale, namespace: 'Common' })
  const tSEO = await getTranslations({ locale, namespace: 'SEO' })

  return {
    title: tCommon('activities'),
    description: tSEO('activitiesDescription')
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

        <ul className='grid grid-cols-1 gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ActivitiesCard
            href={`/${locale}/activites/1`}
            title="Un terrain de jeux grandeur nature pour les amateurs de sports et d'aventure"
            image={forest1}
            alt='TODO'
          />
          <ActivitiesCard
            href={`/${locale}/activites/2`}
            title='Un voyage culinaire au cœur du terroir corrézien et périgourdin'
            image={forest2}
            alt='TODO'
          />
          <ActivitiesCard
            href={`/${locale}/activites/3`}
            title="Sur les traces de l'histoire en Corrèze et en Dordogne"
            image={forest3}
            alt='TODO'
          />
        </ul>
      </section>
    </Container>
  )
}

export default Activites
