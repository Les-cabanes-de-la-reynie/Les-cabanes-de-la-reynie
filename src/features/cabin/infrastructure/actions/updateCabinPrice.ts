'use server'

import { CabinSchema } from '@/features/cabin/CabinSchema'
import { db } from '@/lib/prisma'
import { authActionClient } from '@/lib/safeActions'

export const updateCabinPrice = authActionClient
  .schema(CabinSchema)
  .action(async ({ parsedInput: price }) => {
    await db.cabin.update({
      where: { id: 1 },
      data: price
    })
  })
