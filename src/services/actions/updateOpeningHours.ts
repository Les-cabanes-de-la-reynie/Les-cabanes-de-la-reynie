'use server'

import { revalidatePath } from 'next/cache'
import { db } from '@/lib/prisma'
import { formatStringTimeIntoDate } from '@/lib/utils'
import { OpeningHoursWeekData } from '@/components/modules/OpeningHours/types'

export const updateOpeningHours = async (formData: FormData) => {
  try {
    const allFormData = Array.from(formData) as [
      [keyof OpeningHoursWeekData, string]
    ]

    const OpeningHoursWeekData = allFormData.reduce((acc, curr) => {
      const [key, value] = curr

      acc[key] = formatStringTimeIntoDate(value)

      return acc
    }, {} as OpeningHoursWeekData)

    await db.openingHours.update({
      where: { id: 1 },
      data: OpeningHoursWeekData
    })
  } catch (error) {
    return {
      message: `Update failed ! Reason: ${error}`
    }
  }

  revalidatePath('/[locale]/dashboard', 'layout')
  revalidatePath('/[locale]/contact', 'layout')
}
