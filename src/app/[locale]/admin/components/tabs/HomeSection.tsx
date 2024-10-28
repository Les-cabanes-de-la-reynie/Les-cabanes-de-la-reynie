import { Heading } from '@/components/Heading'
import { P } from '@/components/P'
import { Separator } from '@/components/ui/separator'
import { HomeUploadImage } from '@/features/home/HomeUploadImage'
import { getVisitorCount } from '@/services/queries/visitorCount'
import { useTranslations } from 'next-intl'
import { AdminSection } from '../AdminSection'

export const HomeSection = async () => {
  const t = useTranslations('Common')

  const visitorCount = await getVisitorCount()
  return (
    <AdminSection>
      <Heading level={2} className='my-8 text-center'>
        {t('home')}
      </Heading>

      <Heading level={3} className='my-4'>
        Visiteurs
      </Heading>
      <P>Total : {visitorCount.count}</P>

      <Separator className='my-6' />

      <Heading level={3} className='my-4'>
        {t('uploadImage')}
      </Heading>
      <HomeUploadImage />
    </AdminSection>
  )
}
