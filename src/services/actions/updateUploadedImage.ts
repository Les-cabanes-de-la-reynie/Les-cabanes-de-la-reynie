'use server'

import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { UpdateUploadedImageCommonSchema } from '@/models/UploadedImages'
import { revalidatePath } from 'next/cache'

export const updateUploadedImage = authenticatedAction(
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

      revalidatePath('/[locale]/logements')
      revalidatePath('/[locale]/logements', 'page')
      revalidatePath('/[locale]/logements', 'layout')

      revalidatePath('/[locale]/admin')
      revalidatePath('/[locale]/admin', 'page')
      revalidatePath('/[locale]/admin', 'layout')

      revalidatePath('/[locale]')
      revalidatePath('/[locale]', 'page')
      revalidatePath('/[locale]', 'layout')

      revalidatePath('/')
    } catch (error) {
      return error
    }
  }
)
