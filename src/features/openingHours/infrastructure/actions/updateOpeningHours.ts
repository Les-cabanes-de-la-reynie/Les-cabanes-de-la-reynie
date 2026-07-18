'use server'

import prisma from '@/shared/lib/prisma'
import { authActionClient } from '@/shared/lib/safe-actions'
import { revalidatePath } from 'next/cache'
import { OpeningHoursSchema } from '../../OpeningHoursSchema'

export const updateOpeningHours = authActionClient
  .inputSchema(OpeningHoursSchema)
  .action(async ({ parsedInput: openingHoursData }) => {
    await prisma.openingHours.update({
      where: { id: 1 },
      data: openingHoursData
    })

    revalidatePath('/', 'layout')
  })
