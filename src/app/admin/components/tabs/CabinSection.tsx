import { Cabin } from '@/features/cabin/Cabin'
import { Heading } from '@/shared/components/Heading'
import { useTranslations } from 'next-intl'
import { AdminSection } from '../AdminSection'

export const CabinSection = () => {
  const t = useTranslations('Common')
  return (
    <AdminSection>
      <Heading level={2} className='my-8 text-center'>
        {t('cabin')}
      </Heading>

      <Cabin
        cabinFormTitle={t('cabinInformation')}
        cabinUploadImageTitle={t('uploadImage')}
      />
    </AdminSection>
  )
}
