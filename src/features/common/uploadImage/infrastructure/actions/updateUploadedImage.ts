'use server'

import { UpdateUploadedImageCommonSchema } from '@/features/common/uploadImage/UploadedImagesSchema'
import prisma from '@/lib/prisma'
import { authActionClient } from '@/lib/safeActions'

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
