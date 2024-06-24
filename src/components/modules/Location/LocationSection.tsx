import Heading from '@/components/elements/Heading'
import Loader from '@/components/elements/Loader'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'
import Location from '.'

const LocationSection = () => {
  const t = useTranslations('Contact')

  return (
    <section className='flex w-full flex-col gap-4 lg:mb-0'>
      <Heading level={2}>{t('location')}</Heading>
      <Suspense fallback={<Loader />}>
        <Location />
      </Suspense>
    </section>
  )
}
export default LocationSection
