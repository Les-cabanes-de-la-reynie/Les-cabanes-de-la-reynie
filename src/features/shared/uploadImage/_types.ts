import z from 'zod'
import { UploadImageSchema } from './UploadedImagesSchema'

export enum UploadImageCategoryKeyEnum {
  HomeSlider = 'homeSlider',
  YurtSlider = 'yurtSlider',
  CabinSlider = 'cabinSlider'
}

export type UploadedImage = {
  id: string
  imageKey: string
  imageUrl: string
  category: string
}

export type PostUploadImage = z.infer<typeof UploadImageSchema>
export type DeleteUploadImage = Pick<UploadedImage, 'id' | 'imageKey'>
