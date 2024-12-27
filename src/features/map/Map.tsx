'use client'

import { Address as AddressType } from '@/_types/address'
import { IconContainer } from '@/components/IconContainer'
import { P } from '@/components/P'
import { cn } from '@/utils/tailwind'
import 'leaflet/dist/leaflet.css'
import { AlertCircleIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Address } from './CustomMaker/Address'
import { CustomMarker } from './CustomMaker/CustomMaker'
import { ESTABLISHMENT_POSITION, MAP_URL } from './const'

type MapProps = { address: AddressType }

export const Map = ({ address }: MapProps) => {
  const t = useTranslations('Contact')
  return (
    <div className='relative flex h-96 w-full flex-grow flex-col items-center justify-center'>
      <MapContainer
        scrollWheelZoom={false}
        center={ESTABLISHMENT_POSITION}
        zoom={6}
        className='relative h-full w-full'
      >
        <TileLayer url={MAP_URL} detectRetina={true} />
        <CustomMarker>
          <Address address={address} />
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
