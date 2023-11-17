'use server'

import { OpeningHoursWeekData } from '@/components/modules/OpeningHours/types'
import prisma from '../prisma'
import { revalidatePath } from 'next/cache'

export const openingHoursAction = async (data: OpeningHoursWeekData) => {
  try {
    await prisma.openingHours.update({
      where: { id: 1 },
      data: data
    })

    revalidatePath('/[locale]/dashboard', 'layout')
    revalidatePath('/[locale]/contact', 'layout')
  } catch (error) {
    return error
  }
}
