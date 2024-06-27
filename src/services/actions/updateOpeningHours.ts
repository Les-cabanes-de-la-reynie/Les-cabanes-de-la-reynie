'use server'

import { db } from '@/lib/prisma'
import { authActionClient } from '@/lib/safeActions'
import { OpeningHoursDataSchema } from '@/models/OpeningHours'

export const updateOpeningHours = authActionClient
  .schema(OpeningHoursDataSchema)
  .action(async ({ parsedInput: openingHoursData }) => {
    await db.openingHours.update({
      where: { id: 1 },
      data: openingHoursData
    })
  })
