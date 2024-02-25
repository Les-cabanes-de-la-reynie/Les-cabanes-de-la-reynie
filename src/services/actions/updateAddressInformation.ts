'use server'

import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { AddressFormSchema } from '@/models/Address'

export const updateAddressInformation = authenticatedAction(
  AddressFormSchema,
  async addressData => {
    await db.address.update({
      where: { id: 1 },
      data: addressData
    })
  }
)
