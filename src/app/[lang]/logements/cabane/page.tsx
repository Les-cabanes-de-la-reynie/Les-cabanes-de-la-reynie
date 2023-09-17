import useTranslation from 'next-translate/useTranslation'
import Heading from '@/components/elements/Heading'

export default function Cabane() {
  const { t } = useTranslation('delivery')

  return (
    <div className='container mb-8 w-full'>
      <Heading level={1} className='my-8 text-center'>
        {t('deliveryMainTitle')}
      </Heading>
      <div className='mb-8 flex flex-grow flex-col text-primary-black dark:text-white'>
        CABANE
      </div>
    </div>
  )
}
