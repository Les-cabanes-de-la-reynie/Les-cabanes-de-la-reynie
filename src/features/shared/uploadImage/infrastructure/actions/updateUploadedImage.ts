'use server'

import { UpdateUploadedImageCommonSchema } from '@/features/shared/uploadImage/UploadedImagesSchema'
import prisma from '@/shared/lib/prisma'
import { authActionClient } from '@/shared/lib/safeActions'

export const updateUploadedImage = authActionClient
  .schema(UpdateUploadedImageCommonSchema)
  .action(async ({ parsedInput: { key, url, category } }) => {
    try {
      // Create new image in specific category
      await prisma.image.create({
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
