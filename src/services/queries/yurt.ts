import { RevalidateTagsEnum } from '@/_types/revalidateTags'
import { db } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const getYurtData = unstable_cache(
  async () => {
    const data = await db.yurt.findMany({
      where: {
        id: 1
      }
    })

    return data[0]
  },
  [RevalidateTagsEnum.YURT],
  { tags: [RevalidateTagsEnum.YURT] }
)
