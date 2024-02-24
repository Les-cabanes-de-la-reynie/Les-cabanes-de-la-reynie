'use server'

import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { YurtDataSchema } from '@/models/Yurt'
import { revalidatePath } from 'next/cache'

export const updateYurtPrice = authenticatedAction(
  YurtDataSchema,
  async (price: { price: number }) => {
    await db.yurt.update({
      where: { id: 1 },
      data: price
    })

    revalidatePath('/[locale]/logements/yourte')
    revalidatePath('/[locale]/logements/yourte', 'page')
    revalidatePath('/[locale]/logements/yourte', 'layout')

    revalidatePath('/[locale]')
    revalidatePath('/[locale]', 'page')
    revalidatePath('/[locale]', 'layout')

    revalidatePath('/')
  }
)
