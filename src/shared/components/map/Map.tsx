import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import { ESTABLISHMENT_POSITION, MAP_URL } from './_const'
import { CustomMarker } from './CustomMaker/CustomMaker'
import { ItineraryAlertDialog } from './CustomMaker/ItineraryAlertDialog'

// The footprint and the address notice live in MapSection, rendered on the server
export const Map = () => {
  return (
    <MapContainer
      center={ESTABLISHMENT_POSITION}
      zoom={6}
      scrollWheelZoom={false}
      className='relative h-full w-full'
    >
      <TileLayer url={MAP_URL} detectRetina={true} />
      <CustomMarker>
        <ItineraryAlertDialog />
      </CustomMarker>
    </MapContainer>
  )
}
