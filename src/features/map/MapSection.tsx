import { Heading } from '@/components/Heading'
import { Loader } from '@/components/Loader'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'
import { MapContainer } from './MapContainer'

export const MapSection = () => {
  const t = useTranslations('Contact')

  return (
    <section className='flex w-full flex-col gap-4 lg:mb-0'>
      <Heading level={2}>{t('location')}</Heading>
      <Suspense fallback={<Loader />}>
        <MapContainer />
      </Suspense>
    </section>
  )
}
