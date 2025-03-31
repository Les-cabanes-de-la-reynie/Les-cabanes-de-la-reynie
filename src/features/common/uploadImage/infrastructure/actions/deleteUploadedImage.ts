'use server'

import { DeleteUploadedImageSchema } from '@/features/common/uploadImage/UploadedImagesSchema'
import prisma from '@/lib/prisma'
import { authActionClient } from '@/lib/safeActions'
import { utapi } from '@/lib/utapiUploadthing'

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
