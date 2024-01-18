import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { env } from '@/lib/env'
import Heading from '@/components/elements/Heading'
import Container from '@/components/elements/Container'

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
      <Heading level={1} className='my-8 text-center'>
        ACTIVITES
      </Heading>
      <div className='mb-8 flex flex-grow flex-col'>Incoming</div>
    </Container>
  )
}

export default Activites
