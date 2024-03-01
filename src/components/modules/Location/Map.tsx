'use client'

import { Address as AddressType } from '@/_types/address'
import P from '@/components/elements/P'
import 'leaflet/dist/leaflet.css'
import { AlertCircleIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { MapContainer, TileLayer } from 'react-leaflet'
import CustomMarker from './CustomMaker'
import Address from './CustomMaker/Address'
import { ESTABLISHMENT_POSITION, MAP_URL } from './const'

type MapProps = { address: AddressType }

const Map = ({ address }: MapProps) => {
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

      <P className='flex gap-2'>
        <AlertCircleIcon className='stroke-primary' />
        <span>{t('locationDescription')}</span>
      </P>
    </div>
  )
}
export default Map
