import { Icon } from 'leaflet'
import MarkerIcon2X from 'leaflet/dist/images/marker-icon-2x.png'
import MarkerIcon from 'leaflet/dist/images/marker-icon.png'
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png'
import { PropsWithChildren, useEffect, useRef } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { ESTABLISHMENT_POSITION } from '../const'

Icon.Default.mergeOptions({
  iconRetinaUrl: MarkerIcon2X.src,
  iconUrl: MarkerIcon.src,
  shadowUrl: MarkerShadow.src
})

export type CustomMarkerProps = PropsWithChildren

const CustomMarker = ({ children }: CustomMarkerProps) => {
  const markerRef = useRef<L.Marker | null>(null)

  useEffect(() => {
    if (markerRef.current !== null && !markerRef.current?.isPopupOpen()) {
      markerRef.current?.openPopup()
    }
  }, [])

  return (
    <Marker ref={markerRef} position={ESTABLISHMENT_POSITION}>
      <Popup>{children}</Popup>
    </Marker>
  )
}
export default CustomMarker
