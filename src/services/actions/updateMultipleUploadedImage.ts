'use server'

import { revalidatePath } from 'next/cache'
import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { UpdateUploadedImageCommonSchema } from '@/models/UploadedImages'

export const updateMultipleUploadedImage = authenticatedAction(
  UpdateUploadedImageCommonSchema,
  async ({ key, url, category }) => {
    try {
      // Create new image in specific category
      await db.image.create({
        data: {
          imageKey: key,
          imageUrl: url,
          category
        }
      })

      revalidatePath('/[locale]/logements', 'layout')
      revalidatePath('/[locale]/admin', 'layout')
    } catch (error) {
      return error
    }
  }
)
