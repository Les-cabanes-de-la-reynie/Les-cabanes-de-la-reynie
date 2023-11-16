'use client'

import React, { useEffect, useRef, PropsWithChildren } from 'react'
import { Marker, Popup } from 'react-leaflet'

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
