import Heading from '@/components/elements/Heading'
import AddressInformationSection from '@/components/modules/AddressInformation/AddressInformationSection'
import OpeningHoursSection from '@/components/modules/OpeningHours/OpeningHoursSection'
import { Separator } from '@/components/ui/separator'
import { useTranslations } from 'next-intl'
import AdminSection from '../AdminSection'

const ContactSection = () => {
  const t = useTranslations('Common')
  return (
    <AdminSection>
      <Heading level={2} className='my-8'>
        {t('contact')}
      </Heading>

      <AddressInformationSection />

      <Separator className='my-6' />

      <OpeningHoursSection editable={true} />
    </AdminSection>
  )
}
export default ContactSection
