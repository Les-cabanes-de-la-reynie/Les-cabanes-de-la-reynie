import { Heading } from '@/components/Heading'
import { Hut } from '@/features/hut/tata'
import { useTranslations } from 'next-intl'
import { AdminSection } from '../AdminSection'

export const HutSection = () => {
  const t = useTranslations('Common')
  return (
    <AdminSection>
      <Heading level={2} className='my-8 text-center'>
        {t('hut')}
      </Heading>

      <Hut
        hutFormTitle={t('hutInformation')}
        hutUploadImageTitle={t('uploadImage')}
      />
    </AdminSection>
  )
}
