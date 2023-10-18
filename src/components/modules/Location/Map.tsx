'use client'

import { useEffect, useState } from 'react'
import { toast } from 'sonner'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet-defaulticon-compatibility'
import {
  MAP_URL,
  ESTABLISHMENT_POSITION,
  PARIS_DEFAULT_POSITION
} from './const'
import CustomMarker from './CustomMaker'
import Address from './Address'

const Map = () => {
  const [userLocation, setUserLocation] = useState<number[]>(
    PARIS_DEFAULT_POSITION
  )

  useEffect(() => {
    const successFunction = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords
      setUserLocation(
        position?.coords ? [latitude, longitude] : PARIS_DEFAULT_POSITION
      )
    }

    const getUserLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(successFunction)
      } else {
        toast.error('Geolocation is not supported by this browser.')
      }
    }

    getUserLocation()
  }, [])

  return (
    <MapContainer
      doubleClickZoom={false}
      center={ESTABLISHMENT_POSITION}
      zoom={7}
      className='relative h-full w-full'
    >
      <TileLayer url={MAP_URL} detectRetina={true} />
      <CustomMarker position={ESTABLISHMENT_POSITION} open>
        <Address position={userLocation} />
      </CustomMarker>
    </MapContainer>
  )
}
export default Map
