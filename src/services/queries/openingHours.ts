import { RevalidateTag } from '@/_types/revalidateTags'
import { db } from '@/lib/prisma'
import { unstable_cache } from 'next/cache'

export const getOpeningHours = unstable_cache(
  async () => {
    try {
      const data = await db.openingHours.findMany({
        where: {
          id: 1
        }
      })

      const {
        mondayStart,
        mondayEnd,
        tuesdayStart,
        tuesdayEnd,
        wednesdayStart,
        wednesdayEnd,
        thursdayStart,
        thursdayEnd,
        fridayStart,
        fridayEnd,
        saturdayStart,
        saturdayEnd,
        sundayStart,
        sundayEnd
      } = data[0]

      return {
        mondayStart,
        mondayEnd,
        tuesdayStart,
        tuesdayEnd,
        wednesdayStart,
        wednesdayEnd,
        thursdayStart,
        thursdayEnd,
        fridayStart,
        fridayEnd,
        saturdayStart,
        saturdayEnd,
        sundayStart,
        sundayEnd
      }
    } catch (error) {
      throw new Error('Failed to fetch opening hours data')
    }
  },
  [RevalidateTag.OPENING_HOURS],
  { tags: [RevalidateTag.OPENING_HOURS] }
)
