'use client'

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { MAP_URL, ESTABLISHMENT_POSITION } from './const'
import CustomMarker from './CustomMaker'
import Address from './CustomMaker/Address'

const Map = () => {
  return (
    <MapContainer
      doubleClickZoom={false}
      center={ESTABLISHMENT_POSITION}
      zoom={6}
      className='relative h-full w-full'
    >
      <TileLayer url={MAP_URL} detectRetina={true} />
      <CustomMarker position={ESTABLISHMENT_POSITION} open>
        <Address />
      </CustomMarker>
    </MapContainer>
  )
}
export default Map
