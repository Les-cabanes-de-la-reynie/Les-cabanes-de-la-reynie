'use server'

import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { YurtDataSchema } from '@/models/Yurt'

export const updateYurtPrice = authenticatedAction(
  YurtDataSchema,
  async (price: { price: number }) => {
    await db.yurt.update({
      where: { id: 1 },
      data: price
    })
  }
)
