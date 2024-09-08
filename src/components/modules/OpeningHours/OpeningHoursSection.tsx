import Heading from '@/components/elements/Heading'
import Loader from '@/components/elements/Loader'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'
import OpeningHoursData from './OpeningHoursData'

type OpeningHoursSectionProps = {
  editable: boolean
}

const OpeningHoursSection = ({ editable }: OpeningHoursSectionProps) => {
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
export default OpeningHoursSection
