'use server'

import { UploadImageSchema } from '@/features/shared/uploadImage/UploadedImagesSchema'
import { CACHE_TAGS } from '@/shared/_constants/cacheTags'
import prisma from '@/shared/lib/prisma'
import { authActionClient } from '@/shared/lib/safe-actions'
import { updateTag } from 'next/cache'

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

      updateTag(CACHE_TAGS.images)
    } catch (error) {
      throw error
    }
  })
