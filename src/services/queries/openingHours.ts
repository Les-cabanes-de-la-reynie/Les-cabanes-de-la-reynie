import { OpeningHoursWeekData } from '@/components/modules/OpeningHours/types'
import { db } from '@/lib/prisma'
import { unstable_noStore as noStore } from 'next/cache'

export const getOpeningHours = async () => {
  // equivalent to doing fetch, cache: no-store
  noStore()

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
  } = data[0] as OpeningHoursWeekData

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
}
