import { Heading } from '@/components/Heading'
import { HomeUploadImage } from '@/features/home/HomeUploadImage'
import { useTranslations } from 'next-intl'
import { AdminSection } from '../AdminSection'

export const HomeSection = () => {
  const t = useTranslations('Common')
  return (
    <AdminSection>
      <Heading level={2} className='my-8'>
        {t('home')}
      </Heading>

      <Heading level={3} className='my-4'>
        {t('uploadImage')}
      </Heading>
      <HomeUploadImage />
    </AdminSection>
  )
}
