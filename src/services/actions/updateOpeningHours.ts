'use server'

import { OpeningHoursSchema } from '@/features/openingHours/OpeningHoursSchema'
import { db } from '@/lib/prisma'
import { authActionClient } from '@/lib/safeActions'

export const updateOpeningHours = authActionClient
  .schema(OpeningHoursSchema)
  .action(async ({ parsedInput: openingHoursData }) => {
    await db.openingHours.update({
      where: { id: 1 },
      data: openingHoursData
    })
  })
