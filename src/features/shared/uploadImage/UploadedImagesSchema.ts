import validator from 'validator'
import { z } from 'zod'
import { UploadImageCategoryKeyEnum } from './types'

export const DeleteUploadedImageSchema = z.object({
  id: z.string(),
  imageKey: z.string()
})

export const UpdateUploadedImageCommonSchema = z.object({
  key: z.string(),
  url: z.string().refine(validator.isURL, {
    message: 'URL invalide'
  }),
  category: z.nativeEnum(UploadImageCategoryKeyEnum)
})
