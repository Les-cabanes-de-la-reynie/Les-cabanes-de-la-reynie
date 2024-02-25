'use server'

import { RevalidateTagsEnum } from '@/_types/revalidateTags'
import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { UpdateUploadedImageCommonSchema } from '@/models/UploadedImages'
import { revalidateTag } from 'next/cache'

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

      revalidateTag(RevalidateTagsEnum.IMAGE)
    } catch (error) {
      return error
    }
  }
)
