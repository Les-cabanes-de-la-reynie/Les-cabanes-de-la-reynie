import { CACHE_TAGS } from '@/shared/_constants/cacheTags'
import prisma from '@/shared/lib/prisma'
import { cacheLife, cacheTag } from 'next/cache'

export const getOpeningHours = async () => {
  'use cache'
  cacheLife('hours')
  cacheTag(CACHE_TAGS.openingHours)

  try {
    const openingHours = await prisma.openingHours.findUnique({
      where: { id: 1 }
    })

    if (!openingHours) {
      throw new Error('Opening hours not found')
    }

    return openingHours
  } catch (error) {
    throw new Error(`Failed to fetch opening hours data. ${error}`)
  }
}
