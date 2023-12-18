import { YOURTE_HEADER_KEY } from '@/_constants/uploadImage'
import { db } from '@/lib/prisma'

export const getYourteHeaderImage = async () => {
  return await db.image.findMany({
    where: {
      category: YOURTE_HEADER_KEY
    }
  })
}
