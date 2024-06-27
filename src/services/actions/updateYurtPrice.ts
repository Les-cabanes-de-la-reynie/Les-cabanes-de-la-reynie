'use server'

import { db } from '@/lib/prisma'
import { authActionClient } from '@/lib/safeActions'
import { YurtDataSchema } from '@/models/Yurt'

export const updateYurtPrice = authActionClient
  .schema(YurtDataSchema)
  .action(async ({ parsedInput: price }) => {
    await db.yurt.update({
      where: { id: 1 },
      data: price
    })
  })
