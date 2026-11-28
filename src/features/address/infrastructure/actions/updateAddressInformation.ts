'use server'

import { AddressSchema } from '@/features/address/AddressSchema'
import { CACHE_TAGS } from '@/shared/_constants/cacheTags'
import prisma from '@/shared/lib/prisma'
import { authActionClient } from '@/shared/lib/safe-actions'
import { updateTag } from 'next/cache'

export const updateAddressInformation = authActionClient
  .inputSchema(AddressSchema)
  .action(async ({ parsedInput: addressData }) => {
    await prisma.address.update({
      where: { id: 1 },
      data: addressData
    })

    updateTag(CACHE_TAGS.address)
  })
