'use server'

import { DeleteUploadedImageSchema } from '@/features/shared/uploadImage/UploadedImagesSchema'
import prisma from '@/shared/lib/prisma'
import { authActionClient } from '@/shared/lib/safeActions'
import { utapi } from '@/shared/lib/utapiUploadthing'

export const deleteUploadedImage = authActionClient
  .schema(DeleteUploadedImageSchema)
  .action(async ({ parsedInput: { id, imageKey } }) => {
    // Delete old image in uploadthing (https://uploadthing.com/) by his key
    await utapi.deleteFiles(imageKey)

    // Delete old images in postgre database
    await prisma.image.deleteMany({
      where: {
        id
      }
    })
  })
