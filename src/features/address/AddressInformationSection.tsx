import { Heading } from '@/shared/components/Heading'
import { P } from '@/shared/components/P'
import { getQueryClient } from '@/shared/lib/get-query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { AddressInformation } from './AddressInformation'
import { getAddressOptions } from './infrastructure/getAddressOptions'

export const AddressInformationSection = () => {
  const tAdmin = useTranslations('Admin')

  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(getAddressOptions)

  return (
    <section className='mb-8'>
      <Heading level={2} className='my-8'>
        {tAdmin('personnalInformation')}
      </Heading>

      <P className='mb-5'>{tAdmin('personnalInformationDescription')}</P>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <AddressInformation />
      </HydrationBoundary>
    </section>
  )
}
