import { z } from 'zod'

export const DeleteUploadedImageSchema = {
  id: z.string(),
  imageKey: z.string()
}
