'use server'

import { revalidatePath } from 'next/cache'
import { db } from '@/lib/prisma'
import { OpeningHoursData } from '@/components/modules/OpeningHours/types'
import { authenticatedAction } from '@/lib/safe-actions'
import { z } from 'zod'
import { OpeningHoursDataSchema } from '@/models/OpeningHours'

export const updateOpeningHours = authenticatedAction(
  z.object(OpeningHoursDataSchema),
  async (openingHoursData: OpeningHoursData) => {
    await db.openingHours.update({
      where: { id: 1 },
      data: openingHoursData
    })

    revalidatePath('/[locale]/admin', 'layout')
    revalidatePath('/[locale]/contact', 'layout')
  }
)
