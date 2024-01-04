'use server'

import { revalidatePath } from 'next/cache'
import { db } from '@/lib/prisma'
import { z } from 'zod'
import { getUploadedImagesByCategory } from '../queries/uploadedImagesByCategory'
import { utapi } from '@/lib/utapiUploadthing'
import { authenticatedAction } from '@/lib/safeActions'
import { UpdateUploadedImageCommonSchema } from '@/models/UploadedImages'

export const updateSingleUploadedImage = authenticatedAction(
  z.object(UpdateUploadedImageCommonSchema),
  async ({ key, url, category }) => {
    try {
      const uploadedImages = await getUploadedImagesByCategory(category)

      const lastUploadedImage = uploadedImages.at(-1)

      // Delete old image in uploadthing (https://uploadthing.com/) by his key
      if (lastUploadedImage && 'imageKey' in lastUploadedImage) {
        await utapi.deleteFiles(lastUploadedImage.imageKey)
      }

      // Delete old images in postgre database
      if (lastUploadedImage && 'id' in lastUploadedImage) {
        await db.image.deleteMany({
          where: {
            id: lastUploadedImage.id
          }
        })
      }

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
