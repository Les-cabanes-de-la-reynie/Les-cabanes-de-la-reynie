import { JSX } from 'react'

type LightboxController = {
  toggler: boolean
  sourceIndex: number
}

export type CarouselProps = {
  carouselItems: JSX.Element[]
  lightboxSources: string[]
  lightboxController: LightboxController
  title?: string
}
