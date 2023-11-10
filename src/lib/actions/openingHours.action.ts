'use server'

import { OpeningHoursDayData } from '@/components/modules/OpeningHours/types'
import { formatStringTimeIntoDate } from '@/lib/utils'
import prisma from '../prisma'

export const openingHoursAction = async (formData: FormData) => {
  try {
    const allFormData = Array.from(formData) as [
      [keyof OpeningHoursDayData, string]
    ]

    const openingHoursDayData = allFormData.reduce((acc, curr) => {
      const [key, value] = curr

      acc[key] = formatStringTimeIntoDate(value)

      return acc
    }, {} as OpeningHoursDayData)

    await prisma.openingHours.update({
      where: { id: 1 },
      data: openingHoursDayData
    })
  } catch (error) {
    return error
  }
}
