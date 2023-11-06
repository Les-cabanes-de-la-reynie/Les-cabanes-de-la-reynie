'use server'

import { OpeningHoursDayData } from '@/components/modules/OpeningHours/types'
import { updateOpeningHours } from '@/db/queries/openingHours.query'
import { formatStringTimeIntoDate } from '@/lib/utils'
import { revalidatePath } from 'next/cache'

const onOpeningHoursSubmit = async (formData: FormData) => {
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

    await updateOpeningHours({
      id: 1,
      body: openingHoursDayData
    })

    revalidatePath('/contact')
  } catch (error) {
    return error
  }
}

export default onOpeningHoursSubmit
