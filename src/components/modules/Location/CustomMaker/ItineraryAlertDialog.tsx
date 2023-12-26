import { useState } from 'react'
import { useTranslations } from 'next-intl'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { toast } from 'sonner'
import Itinerary from './Itinerary'
import Link from 'next/link'

const ItineraryAlertDialog = () => {
  const tContact = useTranslations('Contact')
  const tCommon = useTranslations('Common')

  const [userLocation, setUserLocation] = useState<number[]>([])

  const successFunction = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords

    setUserLocation(position?.coords ? [latitude, longitude] : [])
  }

  const getUserLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(successFunction)
    } else {
      toast.error('Geolocation is not supported by this browser.', {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        }
      })
    }
  }

  const [lat, long] = userLocation
  const locationLink = `https://www.google.fr/maps/dir/${lat},+${long}/La+Reynie+Haute,+19310+Louignac/@44.1892761,1.0389325,8z`

  return (
    <AlertDialog>
      <AlertDialogTrigger onClick={getUserLocation}>
        <Itinerary />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {!userLocation.length
              ? tContact('geoLocationNotFound')
              : tContact('geoLocationFound')}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {tContact('confirmLocationDescription')}
          </AlertDialogDescription>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{tCommon('cancel')}</AlertDialogCancel>
          <AlertDialogAction asChild>
            <Link href={locationLink} target='_blank' rel='noreferrer'>
              {tContact('confirmLocationButton')}
            </Link>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
export default ItineraryAlertDialog
