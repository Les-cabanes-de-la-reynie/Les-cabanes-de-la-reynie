import { Heading } from '@/shared/components/Heading'
import { Loader } from '@/shared/components/Loader'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'
import { OpeningHoursData } from './OpeningHoursData'

type OpeningHoursSectionProps = {
  editable: boolean
}

export const OpeningHoursSection = ({ editable }: OpeningHoursSectionProps) => {
  const t = useTranslations('Contact')

  return (
    <section className='mb-8'>
      <Heading level={2} className='my-8'>
        {t('openingHours')}
      </Heading>
      <Suspense fallback={<Loader />}>
        <OpeningHoursData editable={editable} />
      </Suspense>
    </section>
  )
}
