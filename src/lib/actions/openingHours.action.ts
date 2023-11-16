'use server'

import { OpeningHoursWeekData } from '@/components/modules/OpeningHours/types'
import { formatStringTimeIntoDate } from '@/lib/utils'
import prisma from '../prisma'

export const openingHoursAction = async (formData: FormData) => {
  try {
    const allFormData = Array.from(formData) as [
      [keyof OpeningHoursWeekData, string]
    ]

    const OpeningHoursWeekData = allFormData.reduce((acc, curr) => {
      const [key, value] = curr

      acc[key] = formatStringTimeIntoDate(value)

      return acc
    }, {} as OpeningHoursWeekData)

    await prisma.openingHours.update({
      where: { id: 1 },
      data: OpeningHoursWeekData
    })
  } catch (error) {
    return error
  }
}
