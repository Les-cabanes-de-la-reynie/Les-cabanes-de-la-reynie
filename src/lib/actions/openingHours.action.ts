'use server'

import { OpeningHoursDayData } from '@/components/modules/OpeningHours/types'
import { formatStringTimeIntoDate } from '@/lib/utils'
import { revalidatePath } from 'next/cache'
import prisma from '../prisma'

export const getOpeningHours = async () => {
  'use server'

  return await prisma.openingHours.findMany({
    where: {
      id: 1
    }
  })
}

export const openingHoursAction = async (formData: FormData) => {
  'use server'

  try {
    const arrFormData = Array.from(formData).map(([key, value]) => [
      key,
      formatStringTimeIntoDate(String(value))
    ])
    const openingHoursDayData: OpeningHoursDayData =
      Object.fromEntries(arrFormData)

    await prisma.openingHours.update({
      where: { id: 1 },
      data: openingHoursDayData
    })

    revalidatePath('/contact')
  } catch (error) {
    return error
  }
}
