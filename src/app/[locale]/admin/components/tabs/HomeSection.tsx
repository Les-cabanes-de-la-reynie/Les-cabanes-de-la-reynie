'use client'

import { HomeUploadedImages } from '@/features/home/HomeUploadedImages'
import { VisitorTotalCount } from '@/features/visitorCount/VisitorTotalCount'
import { Heading } from '@/shared/components/Heading'
import { Separator } from '@/shared/components/ui/separator'
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
      <HomeUploadedImages />
    </AdminSection>
  )
}
