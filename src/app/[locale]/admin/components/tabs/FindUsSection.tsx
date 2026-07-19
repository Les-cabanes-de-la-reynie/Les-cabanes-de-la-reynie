import { AddressInformationSection } from '@/features/address/components/AddressInformationSection'
import { OpeningHoursSection } from '@/features/openingHours/components/OpeningHoursSection'
import { Heading } from '@/shared/components/Heading'
import { Separator } from '@/shared/components/ui/separator'
import { useTranslations } from 'next-intl'
import { AdminSection } from '../AdminSection'

export const FindUsSection = () => {
  const tCommon = useTranslations('Common')

  return (
    <AdminSection>
      <Heading level={2} className='my-8 text-center'>
        {tCommon('findUs')}
      </Heading>

      <AddressInformationSection />

      <Separator className='my-6' />

      <OpeningHoursSection editable={true} />
    </AdminSection>
  )
}
