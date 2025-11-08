import validator from 'validator'
import { z } from 'zod'
import { UploadImageCategoryKeyEnum } from './_types'

export const GetUploadedImagesSchema = z.object({
  category: z.enum(UploadImageCategoryKeyEnum)
})

export const UploadImageSchema = z.object({
  key: z.string(),
  url: z.string().refine(validator.isURL, {
    message: 'URL invalide'
  }),
  category: z.enum(UploadImageCategoryKeyEnum)
})

export const DeleteUploadedImageSchema = z.object({
  id: z.string(),
  imageKey: z.string()
})
