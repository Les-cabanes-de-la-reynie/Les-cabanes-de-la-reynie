'use client'

import { Address as AddressType } from '@/_types/address'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import CustomMarker from './CustomMaker'
import Address from './CustomMaker/Address'
import { ESTABLISHMENT_POSITION, MAP_URL } from './const'

type MapProps = { address: AddressType }

const Map = ({ address }: MapProps) => {
  return (
    <MapContainer
      doubleClickZoom={false}
      center={ESTABLISHMENT_POSITION}
      zoom={6}
      className='relative h-full w-full'
    >
      <TileLayer url={MAP_URL} detectRetina={true} />
      <CustomMarker>
        <Address address={address} />
      </CustomMarker>
    </MapContainer>
  )
}
export default Map
