'use server'

import prisma from '@/shared/lib/prisma'
import { authActionClient } from '@/shared/lib/safe-actions'
import { CabinSchema } from '../../CabinSchema'

export const updateCabin = authActionClient
  .inputSchema(CabinSchema)
  .action(async ({ parsedInput: cabinData }) => {
    await prisma.cabin.update({
      where: { id: 1 },
      data: cabinData
    })
  })
