'use server'

import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { utapi } from '@/lib/utapiUploadthing'
import { DeleteUploadedImageSchema } from '@/models/UploadedImages'

export const deleteUploadedImage = authenticatedAction(
  DeleteUploadedImageSchema,
  async ({ id, imageKey }) => {
    // Delete old image in uploadthing (https://uploadthing.com/) by his key
    await utapi.deleteFiles(imageKey)

    // Delete old images in postgre database
    await db.image.deleteMany({
      where: {
        id
      }
    })
  }
)
