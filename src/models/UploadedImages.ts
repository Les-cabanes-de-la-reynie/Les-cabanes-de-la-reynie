import { z } from 'zod'
import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'

export const DeleteUploadedImageSchema = z.object({
  id: z.string(),
  imageKey: z.string()
})

export const UpdateUploadedImageCommonSchema = z.object({
  key: z.string(),
  url: z.string(),
  category: z.nativeEnum(UploadImageCategoryKeyEnum)
})
