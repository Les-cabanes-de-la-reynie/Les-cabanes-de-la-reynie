import AdminSection from '@/app/[locale]/admin/components/AdminSection'
import Heading from '@/components/elements/Heading'
import { useTranslations } from 'next-intl'
import Yurt from '../../../../../components/modules/Yurt'

const YurtSection = () => {
  const t = useTranslations('Common')
  return (
    <AdminSection>
      <Heading level={2} className='my-8'>
        {t('yurt')}
      </Heading>

      <Yurt
        yurtFormTitle={t('yurtInformation')}
        yurtUploadImageTitle={t('uploadImage')}
      />
    </AdminSection>
  )
}
export default YurtSection
