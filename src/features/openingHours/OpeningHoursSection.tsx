import { Heading } from '@/shared/components/Heading'
import { getQueryClient } from '@/shared/lib/get-query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { getOpeningHoursServerOptions } from './infrastructure/getOpeningHoursServerOptions'
import { OpeningHours } from './OpeningHours'

type OpeningHoursSectionProps = {
  editable: boolean
}

export const OpeningHoursSection = ({ editable }: OpeningHoursSectionProps) => {
  const tContact = useTranslations('Contact')

  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(getOpeningHoursServerOptions)

  return (
    <section className='mb-8'>
      <Heading level={2} className='my-8'>
        {tContact('openingHours')}
      </Heading>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <OpeningHours editable={editable} />
      </HydrationBoundary>
    </section>
  )
}
