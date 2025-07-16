import { Heading } from '@/shared/components/Heading'
import { getQueryClient } from '@/shared/lib/get-query-client'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { getOpeningHoursOptions } from './infrastructure/getOpeningHoursOptions'
import { OpeningHours } from './OpeningHours'

type OpeningHoursSectionProps = {
  editable: boolean
}

export const OpeningHoursSection = ({ editable }: OpeningHoursSectionProps) => {
  const t = useTranslations('Contact')

  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(getOpeningHoursOptions)

  return (
    <section className='mb-8'>
      <Heading level={2} className='my-8'>
        {t('openingHours')}
      </Heading>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <OpeningHours editable={editable} />
      </HydrationBoundary>
    </section>
  )
}
