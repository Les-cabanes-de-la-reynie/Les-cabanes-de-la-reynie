import { CACHE_TAGS } from '@/shared/_constants/cacheTags'
import prisma from '@/shared/lib/prisma'
import { cacheLife, cacheTag } from 'next/cache'

export const getAddress = async () => {
  'use cache'
  cacheLife('hours')
  cacheTag(CACHE_TAGS.address)

  try {
    const address = await prisma.address.findUnique({
      where: { id: 1 }
    })

    if (!address) {
      throw new Error('Address not found')
    }

    return address
  } catch (error) {
    throw new Error(`Failed to fetch address data. ${error}`)
  }
}
