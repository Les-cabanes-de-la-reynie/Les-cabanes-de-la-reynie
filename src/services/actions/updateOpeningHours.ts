'use server'

import { OpeningHoursData } from '@/components/modules/OpeningHours/types'
import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { OpeningHoursDataSchema } from '@/models/OpeningHours'

export const updateOpeningHours = authenticatedAction(
  OpeningHoursDataSchema,
  async (openingHoursData: OpeningHoursData) => {
    await db.openingHours.update({
      where: { id: 1 },
      data: openingHoursData
    })
  }
)
