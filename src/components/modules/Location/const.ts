import { env } from '@/env'

export const ESTABLISHMENT_POSITION: [number, number] = [45.221387, 1.251147]

export const MAP_URL = `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${env.NEXT_PUBLIC_MAPBOX_KEY}`
