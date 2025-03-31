import { JSX } from 'react'

type LightboxController = {
  toggler: boolean
  sourceIndex: number
}

export type CarouselProps = {
  carouselItems: JSX.Element[]
  lighboxItems: JSX.Element[]
  lightboxController: LightboxController
  title?: string
}
