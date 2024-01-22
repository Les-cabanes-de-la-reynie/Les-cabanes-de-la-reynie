'use server'

import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { AddressFormSchema } from '@/models/Address'
import { revalidatePath } from 'next/cache'

export const updateAddressInformation = authenticatedAction(
  AddressFormSchema,
  async addressData => {
    await db.address.update({
      where: { id: 1 },
      data: addressData
    })

    revalidatePath('/[locale]/admin', 'layout')
    revalidatePath('/[locale]/contact', 'layout')
  }
)
