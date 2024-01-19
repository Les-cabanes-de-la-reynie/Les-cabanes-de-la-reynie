'use client'

import React, { useEffect, useRef, PropsWithChildren } from 'react'
import { Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import MarkerIcon2X from 'leaflet/dist/images/marker-icon-2x.png'
import MarkerIcon from 'leaflet/dist/images/marker-icon.png'
import MarkerShadow from 'leaflet/dist/images/marker-shadow.png'

Icon.Default.mergeOptions({
  iconRetinaUrl: MarkerIcon2X.src,
  iconUrl: MarkerIcon.src,
  shadowUrl: MarkerShadow.src
})

export type CustomMarkerProps = PropsWithChildren & {
  position: [number, number]
  open: boolean
}

const CustomMarker = ({
  position,
  open = false,
  children
}: CustomMarkerProps) => {
  const markerRef = useRef<L.Marker | null>(null)

  useEffect(() => {
    if (
      open &&
      markerRef.current !== null &&
      !markerRef.current?.isPopupOpen()
    ) {
      markerRef.current?.openPopup()
    }
  }, [open])

  return (
    <Marker ref={markerRef} position={position}>
      <Popup>{children}</Popup>
    </Marker>
  )
}
export default CustomMarker
