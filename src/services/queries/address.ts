import { RevalidateTagsEnum } from '@/_types/revalidateTags'
import { db } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const getAddress = unstable_cache(
  async () => {
    const data = await db.address.findMany({
      where: {
        id: 1
      }
    })

    return data[0]
  },
  [RevalidateTagsEnum.ADDRESS],
  { tags: [RevalidateTagsEnum.ADDRESS] }
)
