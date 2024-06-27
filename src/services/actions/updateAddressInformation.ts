'use server'

import { db } from '@/lib/prisma'
import { authActionClient } from '@/lib/safeActions'
import { AddressFormSchema } from '@/models/Address'

export const updateAddressInformation = authActionClient
  .schema(AddressFormSchema)
  .action(async ({ parsedInput: addressData }) => {
    await db.address.update({
      where: { id: 1 },
      data: addressData
    })
  })
