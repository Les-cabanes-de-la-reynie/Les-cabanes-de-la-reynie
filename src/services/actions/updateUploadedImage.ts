'use server'

import { db } from '@/lib/prisma'
import { authActionClient } from '@/lib/safeActions'
import { UpdateUploadedImageCommonSchema } from '@/models/UploadedImages'

export const updateUploadedImage = authActionClient
  .schema(UpdateUploadedImageCommonSchema)
  .action(async ({ parsedInput: { key, url, category } }) => {
    try {
      // Create new image in specific category
      await db.image.create({
        data: {
          imageKey: key,
          imageUrl: url,
          category
        }
      })
    } catch (error) {
      return error
    }
  })
