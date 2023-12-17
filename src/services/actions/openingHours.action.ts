'use server'

import { OpeningHoursWeekData } from '@/components/modules/OpeningHours/types'
import { formatStringTimeIntoDate } from '@/lib/utils'
import prisma from '../../lib/prisma'
import { revalidatePath } from 'next/cache'

export const openingHoursAction = async (formData: FormData) => {
  try {
    const openingHours = await prisma.openingHours.findUnique({
      where: {
        id: 1
      }
    })

    if (!openingHours) {
      throw new Error('OpeningHours not found')
    }

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
    return {
      message: `Database Error: Failed to Update Opening hours. Reason: ${error}`
    }
  }

  revalidatePath('/[locale]/dashboard', 'layout')
  revalidatePath('/[locale]/contact', 'layout')
}
