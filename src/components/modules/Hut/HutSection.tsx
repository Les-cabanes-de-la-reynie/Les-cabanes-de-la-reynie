import Heading from '@/components/elements/Heading'
import { useTranslations } from 'next-intl'
import Hut from '.'

const HutSection = () => {
  const t = useTranslations('Common')
  return (
    <section className='mb-8'>
      <Heading level={2} className='my-8'>
        {t('hut')}
      </Heading>

      <Hut
        hutFormTitle={t('hutInformation')}
        hutUploadImageTitle={t('uploadImage')}
      />
    </section>
  )
}
export default HutSection
