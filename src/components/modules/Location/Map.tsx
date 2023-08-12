'use client'

import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import { mapUrl, position } from './const'
import CustomMarker from './CustomMaker'
import Address from './Address'

const Map = () => {
  return (
    <MapContainer
      doubleClickZoom={false}
      center={position}
      zoom={15}
      className='relative h-full w-full'
    >
      <TileLayer url={mapUrl} detectRetina={true} />
      <CustomMarker position={position} open>
        <Address />
      </CustomMarker>
    </MapContainer>
  )
}
export default Map
