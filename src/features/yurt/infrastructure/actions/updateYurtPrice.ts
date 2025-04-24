'use server'

import { YurtSchema } from '@/features/yurt/YurtSchema'
import prisma from '@/lib/prisma'
import { authActionClient } from '@/lib/safeActions'

export const updateYurtPrice = authActionClient
  .schema(YurtSchema)
  .action(async ({ parsedInput: price }) => {
    await prisma.yurt.update({
      where: { id: 1 },
      data: price
    })
  })
