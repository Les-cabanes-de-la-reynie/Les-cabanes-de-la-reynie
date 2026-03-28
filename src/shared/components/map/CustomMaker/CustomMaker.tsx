import { Icon } from 'leaflet'
import { PropsWithChildren, useEffect, useRef } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { ESTABLISHMENT_POSITION } from '../_const'

// Custom icon configuration
const customIcon = new Icon({
  iconUrl: '/map-pin.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
})

export const CustomMarker = ({ children }: PropsWithChildren) => {
  const markerRef = useRef<L.Marker | null>(null)

  useEffect(() => {
    if (markerRef.current !== null && !markerRef.current?.isPopupOpen()) {
      setTimeout(() => markerRef.current?.openPopup(), 500)
    }
  }, [])

  return (
    <Marker ref={markerRef} position={ESTABLISHMENT_POSITION} icon={customIcon}>
      <Popup>{children}</Popup>
    </Marker>
  )
}
