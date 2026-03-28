import { UploadedImage } from '@/features/shared/uploadImage/_types'
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

export type CarouselWithLightboxProps = {
  title?: string
  data: UploadedImage[]
}
