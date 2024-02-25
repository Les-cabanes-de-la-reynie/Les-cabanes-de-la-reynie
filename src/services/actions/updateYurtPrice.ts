'use server'

import { RevalidateTagsEnum } from '@/_types/revalidateTags'
import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { YurtDataSchema } from '@/models/Yurt'
import { revalidateTag } from 'next/cache'

export const updateYurtPrice = authenticatedAction(
  YurtDataSchema,
  async (price: { price: number }) => {
    await db.yurt.update({
      where: { id: 1 },
      data: price
    })

    revalidateTag(RevalidateTagsEnum.YURT)
  }
)
