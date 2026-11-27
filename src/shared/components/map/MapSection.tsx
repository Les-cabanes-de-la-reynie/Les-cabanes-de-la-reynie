'use client'

import { Heading } from '@/shared/components/Heading'
import { IconContainer } from '@/shared/components/IconContainer'
import { P } from '@/shared/components/P'
import { AlertCircleIcon, MapPinIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import dynamic from 'next/dynamic'
import { useLayoutEffect, useState } from 'react'

// Leaflet needs window: the server sends a placeholder with the map's footprint
const MapWithNoSSR = dynamic(
  () => import('@/shared/components/map/Map').then(mod => mod.Map),
  {
    loading: () => (
      <div
        aria-hidden='true'
        className='flex size-full items-center justify-center bg-muted'
      >
        <MapPinIcon className='size-8 text-muted-foreground' />
      </div>
    ),
    ssr: false
  }
)

export const MapSection = () => {
  const t = useTranslations('FindUs')
  const [mapKey, setMapKey] = useState(0)

  // react-leaflet can't resume a map once <Activity> hides the page: remount it
  useLayoutEffect(() => {
    return () => setMapKey(key => key + 1)
  }, [])

  return (
    <section className='flex w-full flex-col gap-4 lg:mb-0'>
      <Heading level={2}>{t('location')}</Heading>

      <div className='relative flex h-96 w-full grow flex-col items-center justify-center'>
        <div className='min-h-0 w-full flex-1'>
          <MapWithNoSSR key={mapKey} />
        </div>

        <P className='flex'>
          <IconContainer>
            <AlertCircleIcon className='size-5 stroke-ink' />
          </IconContainer>
          <span>{t('locationDescription')}</span>
        </P>
      </div>
    </section>
  )
}
