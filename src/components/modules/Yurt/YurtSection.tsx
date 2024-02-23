import Heading from '@/components/elements/Heading'
import { useTranslations } from 'next-intl'
import Yurt from '.'

const YurtSection = () => {
  const t = useTranslations('Common')
  return (
    <section className='mb-8'>
      <Heading level={2} className='my-8'>
        {t('yurt')}
      </Heading>

      <Yurt
        yurtFormTitle={t('yurtInformation')}
        yurtUploadImageTitle={t('uploadImage')}
      />
    </section>
  )
}
export default YurtSection
