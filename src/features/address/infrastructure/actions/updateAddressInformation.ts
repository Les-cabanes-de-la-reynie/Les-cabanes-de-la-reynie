'use server'

import { AddressSchema } from '@/features/address/AddressSchema'
import prisma from '@/shared/lib/prisma'
import { authActionClient } from '@/shared/lib/safeActions'

export const updateAddressInformation = authActionClient
  .schema(AddressSchema)
  .action(async ({ parsedInput: addressData }) => {
    await prisma.address.update({
      where: { id: 1 },
      data: addressData
    })
  })
