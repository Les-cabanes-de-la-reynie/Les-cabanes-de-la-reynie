'use server'

import { RevalidateTagsEnum } from '@/_types/revalidateTags'
import { db } from '@/lib/prisma'
import { authenticatedAction } from '@/lib/safeActions'
import { AddressFormSchema } from '@/models/Address'
import { revalidateTag } from 'next/cache'

export const updateAddressInformation = authenticatedAction(
  AddressFormSchema,
  async addressData => {
    await db.address.update({
      where: { id: 1 },
      data: addressData
    })

    revalidateTag(RevalidateTagsEnum.ADDRESS)
  }
)
