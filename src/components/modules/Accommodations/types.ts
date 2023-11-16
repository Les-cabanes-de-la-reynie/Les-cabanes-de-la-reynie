import { StaticImageData } from 'next/image'

export type AccommodationsSliderProps = {
  data: StaticImageData[]
}

export type LightboxController = {
  toggler: boolean
  sourceIndex: number
}
