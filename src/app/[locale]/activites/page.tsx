import Heading from 'components/elements/Heading'
import Container from 'components/elements/Container'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

const Activites = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  const t = useTranslations('Delivery')

  return (
    <Container>
      <Heading level={1} className='my-8 text-center'>
        {t('deliveryMainTitle')}
      </Heading>
      <div className='mb-8 flex flex-grow flex-col text-black dark:text-white'>
        ACTIVITES
      </div>
    </Container>
  )
}

export default Activites
