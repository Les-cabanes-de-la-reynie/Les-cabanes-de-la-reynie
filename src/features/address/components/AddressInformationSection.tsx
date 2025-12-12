import { Heading } from '@/shared/components/Heading'
import { Loader } from '@/shared/components/Loader'
import { P } from '@/shared/components/P'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'
import { AddressInformation } from './AddressInformation'

export const AddressInformationSection = () => {
  const tAdmin = useTranslations('Admin')

  return (
    <section className='mb-8'>
      <Heading level={2} className='my-8'>
        {tAdmin('personnalInformation')}
      </Heading>

      <P className='mb-5'>{tAdmin('personnalInformationDescription')}</P>

      <Suspense fallback={<Loader />}>
        <AddressInformation />
      </Suspense>
    </section>
  )
}
