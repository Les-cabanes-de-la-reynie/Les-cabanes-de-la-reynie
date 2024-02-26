'use server'

import { RevalidateTag } from '@/_types/revalidateTags'
import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { HutDataSchema } from '@/models/Hut'
import { revalidateTag } from 'next/cache'

export const updateHutPrice = authenticatedAction(
  HutDataSchema,
  async (price: { price: number }) => {
    await db.hut.update({
      where: { id: 1 },
      data: price
    })

    revalidateTag(RevalidateTag.HUT)
  }
)
