'use server'

import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { HutDataSchema } from '@/models/Hut'
import { revalidatePath } from 'next/cache'

export const updateHutPrice = authenticatedAction(
  HutDataSchema,
  async (price: { price: number }) => {
    await db.hut.update({
      where: { id: 1 },
      data: price
    })

    revalidatePath('/[locale]/logements/cabane', 'layout')
  }
)
