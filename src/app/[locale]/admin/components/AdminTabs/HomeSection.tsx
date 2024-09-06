import AdminSection from '@/app/[locale]/admin/components/AdminSection'
import Heading from '@/components/elements/Heading'
import { useTranslations } from 'next-intl'
import Home from '../../../../../components/modules/Home'

const HomeSection = () => {
  const t = useTranslations('Common')
  return (
    <AdminSection>
      <Heading level={2} className='my-8'>
        {t('home')}
      </Heading>

      <Home homeUploadImageTitle={t('uploadImage')} />
    </AdminSection>
  )
}
export default HomeSection
