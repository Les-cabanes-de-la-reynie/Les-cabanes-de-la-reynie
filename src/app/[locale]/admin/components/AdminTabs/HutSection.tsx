import AdminSection from '@/app/[locale]/admin/components/AdminSection'
import Heading from '@/components/elements/Heading'
import { useTranslations } from 'next-intl'
import Hut from '../../../../../components/modules/Hut'

const HutSection = () => {
  const t = useTranslations('Common')
  return (
    <AdminSection>
      <Heading level={2} className='my-8'>
        {t('hut')}
      </Heading>

      <Hut
        hutFormTitle={t('hutInformation')}
        hutUploadImageTitle={t('uploadImage')}
      />
    </AdminSection>
  )
}
export default HutSection
