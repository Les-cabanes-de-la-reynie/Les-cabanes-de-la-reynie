import { RevalidateTag } from '@/_types/revalidateTags'
import { db } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const getYurtData = unstable_cache(
  async () => {
    try {
      const data = await db.yurt.findMany({
        where: {
          id: 1
        }
      })

      return data[0]
    } catch (error) {
      throw new Error('Failed to fetch yurt data')
    }
  },
  [RevalidateTag.YURT],
  { tags: [RevalidateTag.YURT] }
)
