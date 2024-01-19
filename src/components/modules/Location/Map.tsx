'use client'

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { MAP_URL, ESTABLISHMENT_POSITION } from './const'
import CustomMarker from './CustomMaker'
import Address from './CustomMaker/Address'
import { Address as AddressType } from '@/_types/address'

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
      <CustomMarker position={ESTABLISHMENT_POSITION} open>
        <Address address={address} />
      </CustomMarker>
    </MapContainer>
  )
}
export default Map
