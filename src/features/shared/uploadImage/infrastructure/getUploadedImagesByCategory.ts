import { UploadImageCategoryKeyEnum } from '@/features/shared/uploadImage/types'
import prisma from '@/shared/lib/prisma'

type GetUploadedImagesByCategoryProps = {
  category: UploadImageCategoryKeyEnum
}

export const getUploadedImagesByCategory = async ({
  category
}: GetUploadedImagesByCategoryProps) => {
  try {
    const uploadedImages = await prisma.image.findMany({
      where: {
        category
      }
    })

    return uploadedImages || []
  } catch (error) {
    throw new Error(`Failed to fetch uploaded images data. ${error}`)
  }
}
