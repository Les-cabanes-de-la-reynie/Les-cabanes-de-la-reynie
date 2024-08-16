import { UploadImage, UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import { db } from '@/lib/prisma'

type GetUploadedImagesByCategoryProps = {
  category: UploadImageCategoryKeyEnum
}

export const getUploadedImagesByCategory = async ({
  category
}: GetUploadedImagesByCategoryProps) => {
  try {
    return (await db.image.findMany({
      where: {
        category
      }
    })) as UploadImage[]
  } catch (error) {
    throw new Error(`Failed to fetch uploaded images data. ${error}`)
  }
}
