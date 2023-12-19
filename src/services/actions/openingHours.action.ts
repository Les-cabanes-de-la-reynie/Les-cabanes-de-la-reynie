'use server'

import { OpeningHoursWeekData } from '@/components/modules/OpeningHours/types'
import { formatStringTimeIntoDate } from '@/lib/utils'
import { db } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export const openingHoursAction = async (formData: FormData) => {
  // eslint-disable-next-line no-console
  console.warn('formData', formData)

  try {
    const allFormData = Array.from(formData) as [
      [keyof OpeningHoursWeekData, string]
    ]
    // eslint-disable-next-line no-console
    console.warn('allFormData', allFormData)

    const OpeningHoursWeekData = allFormData.reduce((acc, curr) => {
      const [key, value] = curr

      acc[key] = formatStringTimeIntoDate(value)

      return acc
    }, {} as OpeningHoursWeekData)

    // eslint-disable-next-line no-console
    console.warn('OpeningHoursWeekData', OpeningHoursWeekData)

    const updatedData = await db.openingHours.update({
      where: { id: 1 },
      data: OpeningHoursWeekData
    })

    // eslint-disable-next-line no-console
    console.warn('updatedData', updatedData)
  } catch (error) {
    return {
      message: `Database Error: Failed to Update Opening hours. Reason: ${error}`
    }
  }

  revalidatePath('/[locale]/dashboard', 'layout')
  revalidatePath('/[locale]/contact', 'layout')
}
