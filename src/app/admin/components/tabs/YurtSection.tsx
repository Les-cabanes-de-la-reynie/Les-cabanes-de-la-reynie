import { Yurt } from '@/features/yurt/Yurt'
import { Heading } from '@/shared/components/Heading'
import { useTranslations } from 'next-intl'
import { AdminSection } from '../AdminSection'

export const YurtSection = () => {
  const t = useTranslations('Common')
  return (
    <AdminSection>
      <Heading level={2} className='my-8 text-center'>
        {t('yurt')}
      </Heading>

      <Yurt
        yurtFormTitle={t('yurtInformation')}
        yurtUploadImageTitle={t('uploadImage')}
      />
    </AdminSection>
  )
}
