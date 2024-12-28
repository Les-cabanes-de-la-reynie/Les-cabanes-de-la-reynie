import { Heading } from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { HomeUploadImage } from '@/features/home/HomeUploadImage'
import { VisitorTotalCount } from '@/features/visitorCount/VisitorTotalCount'
import { useTranslations } from 'next-intl'
import { AdminSection } from '../AdminSection'

export const HomeSection = () => {
  const t = useTranslations('Common')

  return (
    <AdminSection>
      <Heading level={2} className='my-8 text-center'>
        {t('home')}
      </Heading>

      <VisitorTotalCount />

      <Separator className='my-6' />

      <Heading level={3} className='my-4'>
        {t('uploadImage')}
      </Heading>
      <HomeUploadImage />
    </AdminSection>
  )
}