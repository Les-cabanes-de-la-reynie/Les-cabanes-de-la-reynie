'use server'

import { UploadImageSchema } from '@/features/shared/uploadImage/UploadedImagesSchema'
import prisma from '@/shared/lib/prisma'
import { authActionClient } from '@/shared/lib/safe-actions'
import { revalidatePath } from 'next/cache'

export const updateUploadedImage = authActionClient
  .inputSchema(UploadImageSchema)
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

      revalidatePath('/', 'layout')
    } catch (error) {
      return error
    }
  })
