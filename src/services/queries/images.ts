import { YOURTE_HEADER_KEY } from '@/_constants/uploadImage'
import { db } from '@/lib/prisma'
import { unstable_noStore } from 'next/cache'

export const getYourteHeaderImage = async () => {
  unstable_noStore()
  return await db.image.findMany({
    where: {
      category: YOURTE_HEADER_KEY
    }
  })
}
