'use client'

import { IconContainer } from '@/shared/components/IconContainer'
import { P } from '@/shared/components/P'
import { getQueryClient } from '@/shared/lib/get-query-client'
import { cn } from '@/shared/utils/tailwind'
import { dehydrate, HydrationBoundary } from '@tanstack/react-query'
import 'leaflet/dist/leaflet.css'
import { AlertCircleIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { MapContainer, TileLayer } from 'react-leaflet'
import { getAddressOptions } from '../address/infrastructure/getAddressOptions'
import { Address } from './CustomMaker/Address'
import { CustomMarker } from './CustomMaker/CustomMaker'
import { ESTABLISHMENT_POSITION, MAP_URL } from './const'

export const Map = () => {
  const t = useTranslations('Contact')

  const queryClient = getQueryClient()
  void queryClient.prefetchQuery(getAddressOptions)

  return (
    <div className='relative flex h-96 w-full grow flex-col items-center justify-center'>
      <MapContainer
        center={ESTABLISHMENT_POSITION}
        zoom={6}
        scrollWheelZoom={false}
        className='relative h-full w-full'
      >
        <TileLayer url={MAP_URL} detectRetina={true} />
        <CustomMarker>
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Address />
          </HydrationBoundary>
        </CustomMarker>
      </MapContainer>

      <P className='flex'>
        <IconContainer>
          <AlertCircleIcon className={cn('stroke-primary h-5 w-5')} />
        </IconContainer>
        <span>{t('locationDescription')}</span>
      </P>
    </div>
  )
}
