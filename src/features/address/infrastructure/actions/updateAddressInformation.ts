'use server'

import { AddressSchema } from '@/features/address/AddressSchema'
import prisma from '@/shared/lib/prisma'
import { authActionClient } from '@/shared/lib/safe-actions'
import { revalidatePath } from 'next/cache'

export const updateAddressInformation = authActionClient
  .inputSchema(AddressSchema)
  .action(async ({ parsedInput: addressData }) => {
    await prisma.address.update({
      where: { id: 1 },
      data: addressData
    })

    revalidatePath('/', 'layout')
  })
