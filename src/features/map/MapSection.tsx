import { Heading } from '@/components/Heading'
import { useTranslations } from 'next-intl'
import { MapContainer } from './MapContainer'

export const MapSection = () => {
  const t = useTranslations('Contact')

  return (
    <section className='flex w-full flex-col gap-4 lg:mb-0'>
      <Heading level={2}>{t('location')}</Heading>

      <MapContainer />
    </section>
  )
}
