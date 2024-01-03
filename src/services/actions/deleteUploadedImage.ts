'use server'

import { revalidatePath } from 'next/cache'
import { db } from '@/lib/prisma'
import { utapi } from '@/lib/utapiUploadthing'
import { authenticatedAction } from '@/lib/safeActions'
import { z } from 'zod'
import { DeleteUploadedImageSchema } from '@/models/UploadedImages'

export const deleteUploadedImage = authenticatedAction(
  z.object(DeleteUploadedImageSchema),
  async ({ id, imageKey }) => {
    // Delete old image in uploadthing (https://uploadthing.com/) by his key
    await utapi.deleteFiles(imageKey)

    // Delete old images in postgre database
    await db.image.deleteMany({
      where: {
        id
      }
    })

    revalidatePath('/[locale]/admin', 'layout')
    revalidatePath('/[locale]/logements', 'layout')
  }
)
