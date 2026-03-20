import { HomeUploadedImages } from '@/features/home/HomeUploadedImages'
import { Heading } from '@/shared/components/Heading'
import { AdminSection } from '../AdminSection'

export const HomeSection = () => {
  return (
    <AdminSection>
      <Heading level={2} className='my-8 text-center'>
        Accueil
      </Heading>

      <Heading level={3} className='my-4'>
        Télécharger vos images
      </Heading>
      <HomeUploadedImages />
    </AdminSection>
  )
}
