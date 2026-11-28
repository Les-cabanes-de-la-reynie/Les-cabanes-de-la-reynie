'use server'

import { DeleteUploadedImageSchema } from '@/features/shared/uploadImage/UploadedImagesSchema'
import { CACHE_TAGS } from '@/shared/_constants/cacheTags'
import prisma from '@/shared/lib/prisma'
import { authActionClient } from '@/shared/lib/safe-actions'
import { utapi } from '@/shared/lib/utapiUploadthing'
import { updateTag } from 'next/cache'

export const deleteUploadedImage = authActionClient
  .inputSchema(DeleteUploadedImageSchema)
  .action(async ({ parsedInput: { id, imageKey } }) => {
    // Delete old image in uploadthing (https://uploadthing.com/) by his key
    await utapi.deleteFiles(imageKey)

    // Delete old images in postgre database
    await prisma.image.deleteMany({
      where: {
        id
      }
    })

    updateTag(CACHE_TAGS.images)
  })
