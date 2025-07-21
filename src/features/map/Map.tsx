import { IconContainer } from '@/shared/components/IconContainer'
import { P } from '@/shared/components/P'
import { cn } from '@/shared/utils/tailwind'
import 'leaflet/dist/leaflet.css'
import { AlertCircleIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { MapContainer, TileLayer } from 'react-leaflet'
import { ESTABLISHMENT_POSITION, MAP_URL } from './const'
import { CustomMarker } from './CustomMaker/CustomMaker'
import { ItineraryAlertDialog } from './CustomMaker/ItineraryAlertDialog'

export const Map = () => {
  const t = useTranslations('Contact')

  return (
    <div className='relative flex h-96 w-full grow flex-col items-center justify-center'>
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

      <P className='flex'>
        <IconContainer>
          <AlertCircleIcon className={cn('stroke-primary h-5 w-5')} />
        </IconContainer>
        <span>{t('locationDescription')}</span>
      </P>
    </div>
  )
}
