'use server'

import { OpeningHoursDayData } from '@/components/modules/OpeningHours/types'
import { formatStringTimeIntoDate } from '@/lib/utils'
import prisma from '../prisma'

export const openingHoursAction = async (formData: FormData) => {
  try {
    const mondayStart = formatStringTimeIntoDate(
      String(formData?.get('mondayStart'))
    )
    const mondayEnd = formatStringTimeIntoDate(
      String(formData?.get('mondayEnd'))
    )
    const tuesdayStart = formatStringTimeIntoDate(
      String(formData?.get('tuesdayStart'))
    )
    const tuesdayEnd = formatStringTimeIntoDate(
      String(formData?.get('tuesdayEnd'))
    )
    const wednesdayStart = formatStringTimeIntoDate(
      String(formData?.get('wednesdayStart'))
    )
    const wednesdayEnd = formatStringTimeIntoDate(
      String(formData?.get('wednesdayEnd'))
    )
    const thursdayStart = formatStringTimeIntoDate(
      String(formData?.get('thursdayStart'))
    )
    const thursdayEnd = formatStringTimeIntoDate(
      String(formData?.get('thursdayEnd'))
    )
    const fridayStart = formatStringTimeIntoDate(
      String(formData?.get('fridayStart'))
    )
    const fridayEnd = formatStringTimeIntoDate(
      String(formData?.get('fridayEnd'))
    )
    const saturdayStart = formatStringTimeIntoDate(
      String(formData?.get('saturdayStart'))
    )
    const saturdayEnd = formatStringTimeIntoDate(
      String(formData?.get('saturdayEnd'))
    )
    const sundayStart = formatStringTimeIntoDate(
      String(formData?.get('sundayStart'))
    )
    const sundayEnd = formatStringTimeIntoDate(
      String(formData?.get('sundayEnd'))
    )

    const openingHoursDayData: OpeningHoursDayData = {
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

    await prisma.openingHours.update({
      where: { id: 1 },
      data: openingHoursDayData
    })
  } catch (error) {
    return error
  }
}
