import { OpeningHoursWeekData } from '@/components/modules/OpeningHours/types'
import prisma from '../prisma'

export const getOpeningHours = async () => {
  const data = await prisma.openingHours.findMany({
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
