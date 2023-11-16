import { LightboxController } from '../Accommodations/types'

export type CarouselProps = {
  carouselItems: JSX.Element[]
  lighboxItems: JSX.Element[]
  lightboxController: LightboxController
  title?: string
}
