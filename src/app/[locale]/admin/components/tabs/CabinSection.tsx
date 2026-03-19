import { Cabin } from '@/features/accommodations/cabin/components/Cabin'
import { Heading } from '@/shared/components/Heading'
import { AdminSection } from '../AdminSection'

export const CabinSection = () => {
  return (
    <AdminSection>
      <Heading level={2} className='my-8 text-center'>
        Cabane
      </Heading>

      <Cabin
        cabinFormTitle='Informations concernant la cabane'
        cabinUploadImageTitle='Télécharger vos images'
      />
    </AdminSection>
  )
}
