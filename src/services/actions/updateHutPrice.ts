'use server'

import { db } from '@/lib/prisma'
import { authActionClient } from '@/lib/safeActions'
import { HutDataSchema } from '@/models/Hut'

export const updateHutPrice = authActionClient
  .schema(HutDataSchema)
  .action(async ({ parsedInput: price }) => {
    await db.hut.update({
      where: { id: 1 },
      data: price
    })
  })
