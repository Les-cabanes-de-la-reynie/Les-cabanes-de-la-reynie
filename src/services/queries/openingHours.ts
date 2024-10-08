import { db } from '@/lib/prisma'

export const getOpeningHours = async () => {
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
    throw new Error(`Failed to fetch opening hours data. ${error}`)
  }
}
