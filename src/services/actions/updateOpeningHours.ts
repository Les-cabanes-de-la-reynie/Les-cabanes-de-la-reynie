'use server'

import { OpeningHoursData } from '@/components/modules/OpeningHours/types'
import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { OpeningHoursDataSchema } from '@/models/OpeningHours'
import { revalidatePath } from 'next/cache'

export const updateOpeningHours = authenticatedAction(
  OpeningHoursDataSchema,
  async (openingHoursData: OpeningHoursData) => {
    await db.openingHours.update({
      where: { id: 1 },
      data: openingHoursData
    })

    revalidatePath('/[locale]/admin')
    revalidatePath('/[locale]/admin', 'page')
    revalidatePath('/[locale]/admin', 'layout')

    revalidatePath('/[locale]/contact')
    revalidatePath('/[locale]/contact', 'page')
    revalidatePath('/[locale]/contact', 'layout')

    revalidatePath('/[locale]')
    revalidatePath('/[locale]', 'page')
    revalidatePath('/[locale]', 'layout')

    revalidatePath('/')
  }
)
