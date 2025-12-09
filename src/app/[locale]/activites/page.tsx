import { routing } from '@/i18n/routing'
import { SEO } from '@/shared/_constants/SEO'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { ActivityCardList } from './components/ActivityCardList'

export const metadata: Metadata = {
  title: SEO.activity.title,
  description: SEO.activity.description
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

const Activites = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <Container>
      <section>
        <Heading level={1} className='my-8 text-center'>
          ACTIVITES
        </Heading>

        <ActivityCardList />
      </section>
    </Container>
  )
}

export default Activites
