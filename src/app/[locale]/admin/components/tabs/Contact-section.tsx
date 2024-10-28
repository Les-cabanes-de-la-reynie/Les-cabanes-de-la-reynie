import { Heading } from '@/components/Heading'
import { Separator } from '@/components/ui/separator'
import { AddressInformationSection } from '@/features/addressInformation/AddressInformationSection'
import { OpeningHoursSection } from '@/features/openingHours/OpeningHoursSection'
import { useTranslations } from 'next-intl'
import { AdminSection } from '../AdminSection'

export const ContactSection = () => {
  const t = useTranslations('Common')
  return (
    <AdminSection>
      <Heading level={2} className='my-8 text-center'>
        {t('contact')}
      </Heading>

      <AddressInformationSection />

      <Separator className='my-6' />

      <OpeningHoursSection editable={true} />
    </AdminSection>
  )
}
