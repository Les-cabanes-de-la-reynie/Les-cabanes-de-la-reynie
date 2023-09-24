import useTranslation from 'next-translate/useTranslation'
import Heading from '@/components/elements/Heading'
import Container from '@/components/elements/Container'

export default function Yourte() {
  const { t } = useTranslation('delivery')

  return (
    <Container>
      <Heading level={1} className='my-8 text-center'>
        {t('deliveryMainTitle')}
      </Heading>
      <div className='mb-8 flex flex-grow flex-col text-primary-black dark:text-white'>
        Yourte
      </div>
    </Container>
  )
}
