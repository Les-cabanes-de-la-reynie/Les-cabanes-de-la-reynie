import { useTranslations } from 'next-intl'
import Heading from '@/components/elements/Heading'
import Container from '@/components/elements/Container'
import { unstable_setRequestLocale } from 'next-intl/server'

const Cabane = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const t = useTranslations('SEO')

  return (
    <Container>
      <Heading level={1} className='my-8 text-center'>
        CABANE
      </Heading>
      <div className='mb-8 flex flex-grow flex-col'>{t('description')}</div>
    </Container>
  )
}

export default Cabane
