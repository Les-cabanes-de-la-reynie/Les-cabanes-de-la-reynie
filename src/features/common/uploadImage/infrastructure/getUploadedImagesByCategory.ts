import { UploadImageCategoryKeyEnum } from '@/features/common/uploadImage/types'
import db from '@/lib/prisma'

type GetUploadedImagesByCategoryProps = {
  category: UploadImageCategoryKeyEnum
}

export const getUploadedImagesByCategory = async ({
  category
}: GetUploadedImagesByCategoryProps) => {
  try {
    const uploadedImages = await db.image.findMany({
      where: {
        category
      }
    })

    return uploadedImages || []
  } catch (error) {
    throw new Error(`Failed to fetch uploaded images data. ${error}`)
  }
}
