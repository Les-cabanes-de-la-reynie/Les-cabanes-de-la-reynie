import { useTranslations } from 'next-intl'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server'
import { env } from '@/lib/env'
import Heading from '@/components/elements/Heading'
import Container from '@/components/elements/Container'
import { RootLayoutProps } from '../layout'

export async function generateStaticParams() {
  return env.NEXT_PUBLIC_LANGS.map(locale => ({ locale }))
}

export async function generateMetadata({
  params: { locale }
}: RootLayoutProps) {
  const t = await getTranslations({ locale, namespace: 'Common' })

  return {
    title: t('activities')
  }
}

const Activites = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const t = useTranslations('SEO')

  return (
    <Container>
      <Heading level={1} className='my-8 text-center'>
        ACTIVITES
      </Heading>
      <div className='mb-8 flex flex-grow flex-col'>{t('homeDescription')}</div>
    </Container>
  )
}

export default Activites
