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
} from '@/shared/components/ui/alert-dialog'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'sonner'
import { Itinerary } from './Itinerary'

export const ItineraryAlertDialog = () => {
  const tContact = useTranslations('Contact')
  const tCommon = useTranslations('Common')

  const [userLocation, setUserLocation] = useState<number[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const successFunction = (position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords
    setUserLocation([latitude, longitude])
    setIsLoading(false)
  }

  const errorFunction = useCallback(
    (error: GeolocationPositionError) => {
      setIsLoading(false)

      switch (error.code) {
        case error.PERMISSION_DENIED:
          toast.error(tContact('geoLocationPermissionDenied'), {
            action: {
              label: tCommon('close'),
              onClick: () => toast.dismiss()
            },
            duration: Infinity
          })
          break

        case error.POSITION_UNAVAILABLE:
          toast.error(
            tContact('geoLocationPermissionDeniedButtonDescription'),
            {
              action: {
                label: tContact('geoLocationPermissionDeniedButton'),
                onClick: () => toast.dismiss()
              },
              duration: Infinity
            }
          )
          break

        case error.TIMEOUT:
          toast.error(
            tContact('geoLocationPermissionDeniedButtonDescription'),
            {
              action: {
                label: tContact('geoLocationPermissionDeniedButton'),
                onClick: () => toast.dismiss()
              },
              duration: Infinity
            }
          )
          break

        default:
          toast.error(
            tContact('geoLocationPermissionDeniedButtonDescription'),
            {
              action: {
                label: tCommon('close'),
                onClick: () => toast.dismiss()
              },
              duration: Infinity
            }
          )
      }
    },
    [tContact, tCommon]
  )

  const getUserLocation = useCallback(() => {
    if ('geolocation' in navigator) {
      setIsLoading(true)
      navigator.geolocation.getCurrentPosition(successFunction, errorFunction, {
        enableHighAccuracy: false, // Changed to false for compatibility
        timeout: 150000, // Increased to 15 seconds
        maximumAge: 300000 // 5 minutes
      })
    } else {
      toast.error(tContact('geoLocationPermissionDeniedButtonDescription'), {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        },
        duration: Infinity
      })
    }
  }, [tContact, tCommon, errorFunction])

  // Watch for changes in geolocation permission
  useEffect(() => {
    const checkPermission = () => {
      if ('permissions' in navigator) {
        navigator.permissions
          .query({ name: 'geolocation' })
          .then(permissionStatus => {
            permissionStatus.onchange = () => {
              if (permissionStatus.state === 'granted' && isDialogOpen) {
                // Relaunch the geolocation if the user just authorized the permission
                getUserLocation()
              }
            }
          })
      }
    }

    checkPermission()
  }, [isDialogOpen, getUserLocation])

  // Relaunch the geolocation when the dialog opens
  useEffect(() => {
    if (isDialogOpen && !userLocation.length) {
      getUserLocation()
    }
  }, [isDialogOpen, getUserLocation, userLocation.length])

  const [lat, long] = userLocation
  const locationLink = `https://www.google.fr/maps/dir/${lat},+${long}/La+Reynie+Haute,+19310+Louignac/@44.1892761,1.0389325,8z`

  return (
    <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <AlertDialogTrigger data-testid='itinerary-link'>
        <Itinerary />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {isLoading
              ? tContact('geoLocationLoading')
              : !userLocation.length
                ? tContact('geoLocationNotFound')
                : tContact('geoLocationFound')}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isLoading
              ? tContact('geoLocationPermissionDeniedDescription')
              : tContact('confirmLocationDescription')}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{tCommon('cancel')}</AlertDialogCancel>
          {userLocation.length > 0 && (
            <AlertDialogAction asChild>
              <Link
                href={locationLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                {tContact('confirmLocationButton')}
              </Link>
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
