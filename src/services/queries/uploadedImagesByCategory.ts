import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import { db } from '@/lib/prisma'

export const getUploadedImagesByCategory = async (
  categoryKey: UploadImageCategoryKeyEnum
) => {
  return await db.image.findMany({
    where: {
      category: categoryKey
    }
  })
}
