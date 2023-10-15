import { StaticImageData } from 'next/image'

export interface AccommodationsSliderProps {
  data: StaticImageData[]
}

export interface LightboxController {
  toggler: boolean
  sourceIndex: number
}
