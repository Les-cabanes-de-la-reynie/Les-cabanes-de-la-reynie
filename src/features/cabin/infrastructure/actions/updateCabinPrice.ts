'use server'

import { CabinSchema } from '@/features/cabin/CabinSchema'
import prisma from '@/lib/prisma'
import { authActionClient } from '@/lib/safeActions'

export const updateCabinPrice = authActionClient
  .schema(CabinSchema)
  .action(async ({ parsedInput: price }) => {
    await prisma.cabin.update({
      where: { id: 1 },
      data: price
    })
  })
