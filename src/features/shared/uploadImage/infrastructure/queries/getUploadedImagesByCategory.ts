import prisma from '@/shared/lib/prisma'
import { UploadImageCategoryKeyEnum } from '../../_types'

export const getUploadedImagesByCategory = async (
  category: UploadImageCategoryKeyEnum
) => {
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
