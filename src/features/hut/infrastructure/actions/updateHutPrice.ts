'use server'

import { HutSchema } from '@/features/hut/HutSchema'
import { db } from '@/lib/prisma'
import { authActionClient } from '@/lib/safeActions'

export const updateHutPrice = authActionClient
  .schema(HutSchema)
  .action(async ({ parsedInput: price }) => {
    await db.hut.update({
      where: { id: 1 },
      data: price
    })
  })
