import { LightboxController } from '../Accommodations/types'

export interface CarouselProps {
  carouselItems: JSX.Element[]
  lighboxItems: JSX.Element[]
  lightboxController: LightboxController
  title?: string
}
