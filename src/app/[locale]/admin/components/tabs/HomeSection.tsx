import { HomeUploadedImages } from '@/features/home/HomeUploadedImages'
import { VisitorTotalCount } from '@/features/visitorCount/components/VisitorTotalCount'
import { Heading } from '@/shared/components/Heading'
import { Separator } from '@/shared/components/ui/separator'
import { AdminSection } from '../AdminSection'

export const HomeSection = () => {
  return (
    <AdminSection>
      <Heading level={2} className='my-8 text-center'>
        Accueil
      </Heading>

      <VisitorTotalCount />

      <Separator className='my-6' />

      <Heading level={3} className='my-4'>
        Télécharger vos images
      </Heading>
      <HomeUploadedImages />
    </AdminSection>
  )
}
