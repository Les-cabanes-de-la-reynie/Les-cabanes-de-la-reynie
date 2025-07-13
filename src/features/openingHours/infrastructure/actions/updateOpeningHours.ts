'use server'

import { OpeningHoursSchema } from '@/features/openingHours/OpeningHoursSchema'
import prisma from '@/shared/lib/prisma'
import { authActionClient } from '@/shared/lib/safeActions'

export const updateOpeningHours = authActionClient
  .schema(OpeningHoursSchema)
  .action(async ({ parsedInput: openingHoursData }) => {
    await prisma.openingHours.update({
      where: { id: 1 },
      data: openingHoursData
    })
  })
