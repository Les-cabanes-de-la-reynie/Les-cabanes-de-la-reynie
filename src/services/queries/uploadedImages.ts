import { db } from '@/lib/prisma'

export const getUploadedImages = async () => {
  return await db.image.findMany()
}
