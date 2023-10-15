import createTranslation from 'next-translate/createTranslation'
import Heading from '@/components/elements/Heading'
import Container from '@/components/elements/Container'

const Yourte = () => {
  const { t } = createTranslation('delivery')

  return (
    <Container>
      <Heading level={1} className='my-8 text-center'>
        {t('deliveryMainTitle')}
      </Heading>
      <div className='mb-8 flex flex-grow flex-col text-black dark:text-white'>
        Yourte
      </div>
    </Container>
  )
}

export default Yourte
