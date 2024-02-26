import { RevalidateTag } from '@/_types/revalidateTags'
import { db } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const getAddress = unstable_cache(
  async () => {
    try {
      const data = await db.address.findMany({
        where: {
          id: 1
        }
      })

      return data[0]
    } catch (error) {
      throw new Error('Failed to fetch address data')
    }
  },
  [RevalidateTag.ADDRESS],
  { tags: [RevalidateTag.ADDRESS] }
)
