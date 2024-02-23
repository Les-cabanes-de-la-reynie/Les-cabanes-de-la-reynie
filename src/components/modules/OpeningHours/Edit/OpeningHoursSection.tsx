import Heading from '@/components/elements/Heading'
import { Loader } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'
import OpeningHoursEdit from './OpeningHoursEdit'

const OpeningHoursSection = () => {
  const t = useTranslations('Contact')

  return (
    <section className='mb-8'>
      <Heading level={2} className='my-8'>
        {t('openingHours')}
      </Heading>
      <Suspense fallback={<Loader />}>
        <OpeningHoursEdit />
      </Suspense>
    </section>
  )
}
export default OpeningHoursSection
