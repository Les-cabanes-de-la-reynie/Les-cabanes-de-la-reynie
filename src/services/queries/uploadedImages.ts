import { UploadImageCategoryKeyEnum } from '@/_types/uploadImage'
import { db } from '@/lib/prisma'
import { unstable_noStore } from 'next/cache'

export const getUploadedImages = async (
  categoryKey: UploadImageCategoryKeyEnum
) => {
  unstable_noStore()
  return await db.image.findMany({
    where: {
      category: categoryKey
    }
  })
}
