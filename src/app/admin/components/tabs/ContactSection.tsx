'use client'

import { AddressInformationSection } from '@/features/address/AddressInformationSection'
import { OpeningHoursSection } from '@/features/openingHours/OpeningHoursSection'
import { Heading } from '@/shared/components/Heading'
import { Separator } from '@/shared/components/ui/separator'
import { useTranslations } from 'next-intl'
import { AdminSection } from '../AdminSection'

export const ContactSection = () => {
  const tCommon = useTranslations('Common')
  return (
    <AdminSection>
      <Heading level={2} className='my-8 text-center'>
        {tCommon('contact')}
      </Heading>

      <AddressInformationSection />

      <Separator className='my-6' />

      <OpeningHoursSection editable={true} />
    </AdminSection>
  )
}
