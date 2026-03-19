import { Yurt } from '@/features/accommodations/yurt/components/Yurt'
import { Heading } from '@/shared/components/Heading'
import { AdminSection } from '../AdminSection'

export const YurtSection = () => {
  return (
    <AdminSection>
      <Heading level={2} className='my-8 text-center'>
        Yourte
      </Heading>

      <Yurt
        yurtFormTitle='Informations concernant la yourte'
        yurtUploadImageTitle='Télécharger vos images'
      />
    </AdminSection>
  )
}
