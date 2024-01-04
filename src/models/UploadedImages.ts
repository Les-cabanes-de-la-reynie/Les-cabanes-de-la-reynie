import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import { z } from 'zod'

export const DeleteUploadedImageSchema = {
  id: z.string(),
  imageKey: z.string()
}

export const UpdateUploadedImageCommonSchema = {
  key: z.string(),
  url: z.string(),
  category: z.nativeEnum(UploadImageCategoryKeyEnum)
}
