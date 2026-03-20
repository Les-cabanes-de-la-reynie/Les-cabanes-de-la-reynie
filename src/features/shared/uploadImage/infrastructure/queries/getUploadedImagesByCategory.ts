import prisma from '@/shared/lib/prisma'
import { unstable_cache } from 'next/cache'
import { UploadImageCategoryKeyEnum } from '../../_types'

export const getUploadedImagesByCategory = unstable_cache(
  async (category: UploadImageCategoryKeyEnum) => {
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
  },
  ['uploaded-images'],
  { revalidate: 3600, tags: ['images'] }
)
