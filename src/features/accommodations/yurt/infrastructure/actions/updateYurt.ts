'use server'

import prisma from '@/shared/lib/prisma'
import { authActionClient } from '@/shared/lib/safe-actions'
import { YurtSchema } from '../../YurtSchema'

export const updateYurt = authActionClient
  .inputSchema(YurtSchema)
  .action(async ({ parsedInput: yurtData }) => {
    await prisma.yurt.update({
      where: { id: 1 },
      data: yurtData
    })
  })
