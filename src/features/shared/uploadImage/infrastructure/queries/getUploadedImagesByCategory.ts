import { CACHE_TAGS } from '@/shared/_constants/cacheTags'
import prisma from '@/shared/lib/prisma'
import { cacheLife, cacheTag } from 'next/cache'
import { UploadImageCategoryKeyEnum } from '../../_types'

export const getUploadedImagesByCategory = async (
  category: UploadImageCategoryKeyEnum
) => {
  'use cache'
  cacheLife('hours')
  cacheTag(CACHE_TAGS.images)

  try {
    const uploadedImages = await prisma.image.findMany({
      where: {
        category
      }
    })

    if (!uploadedImages) {
      throw new Error('Uploaded images not found')
    }

    return uploadedImages
  } catch (error) {
    throw new Error(`Failed to fetch uploaded images data. ${error}`)
  }
}
