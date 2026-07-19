'use client'

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
  const tFindUs = useTranslations('FindUs')
  const tCommon = useTranslations('Common')

  const [userLocation, setUserLocation] = useState<number[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const successFunction = useCallback((position: GeolocationPosition) => {
    const { latitude, longitude } = position.coords
    setUserLocation([latitude, longitude])
    setIsLoading(false)
  }, [])

  const errorFunction = useCallback(
    (error: GeolocationPositionError) => {
      setIsLoading(false)

      switch (error.code) {
        case error.PERMISSION_DENIED:
          toast.error(tFindUs('geoLocationPermissionDenied'), {
            action: {
              label: tCommon('close'),
              onClick: () => toast.dismiss()
            },
            duration: Infinity
          })
          break

        case error.POSITION_UNAVAILABLE:
          toast.error(tFindUs('geoLocationPermissionDeniedButtonDescription'), {
            action: {
              label: tFindUs('geoLocationPermissionDeniedButton'),
              onClick: () => toast.dismiss()
            },
            duration: Infinity
          })
          break

        case error.TIMEOUT:
          toast.error(tFindUs('geoLocationPermissionDeniedButtonDescription'), {
            action: {
              label: tFindUs('geoLocationPermissionDeniedButton'),
              onClick: () => toast.dismiss()
            },
            duration: Infinity
          })
          break

        default:
          toast.error(tFindUs('geoLocationPermissionDeniedButtonDescription'), {
            action: {
              label: tCommon('close'),
              onClick: () => toast.dismiss()
            },
            duration: Infinity
          })
      }
    },
    [tCommon, tFindUs]
  )

  const getUserLocation = useCallback(() => {
    if ('geolocation' in navigator) {
      setIsLoading(true)
      navigator.geolocation.getCurrentPosition(successFunction, errorFunction, {
        enableHighAccuracy: false,
        timeout: 15000,
        maximumAge: 300000 // 5 minutes
      })
    } else {
      toast.error(tFindUs('geoLocationPermissionDeniedButtonDescription'), {
        action: {
          label: tCommon('close'),
          onClick: () => toast.dismiss()
        },
        duration: Infinity
      })
    }
  }, [successFunction, errorFunction, tCommon, tFindUs])

  // Relaunch the geolocation if the user grants the permission while the dialog is open
  useEffect(() => {
    if (!('permissions' in navigator)) return

    let status: PermissionStatus | undefined

    navigator.permissions.query({ name: 'geolocation' }).then(result => {
      status = result
      result.onchange = () => {
        if (result.state === 'granted' && isDialogOpen) {
          getUserLocation()
        }
      }
    })

    return () => {
      if (status) status.onchange = null
    }
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
              ? tFindUs('geoLocationLoading')
              : !userLocation.length
                ? tFindUs('geoLocationNotFound')
                : tFindUs('geoLocationFound')}
          </AlertDialogTitle>
          <AlertDialogDescription>
            {isLoading
              ? tFindUs('geoLocationPermissionDeniedDescription')
              : userLocation.length
                ? tFindUs('locationFoundDescription')
                : tFindUs('confirmLocationDescription')}
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
                {tFindUs('confirmLocationButton')}
              </Link>
            </AlertDialogAction>
          )}
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
