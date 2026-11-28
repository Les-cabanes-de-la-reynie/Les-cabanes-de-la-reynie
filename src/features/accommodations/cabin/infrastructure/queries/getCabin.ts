import { CACHE_TAGS } from '@/shared/_constants/cacheTags'
import prisma from '@/shared/lib/prisma'
import { cacheLife, cacheTag } from 'next/cache'

export const getCabin = async () => {
  'use cache'
  cacheLife('hours')
  cacheTag(CACHE_TAGS.cabin)

  try {
    const cabin = await prisma.cabin.findUnique({
      where: { id: 1 }
    })

    if (!cabin) {
      throw new Error('Cabin not found')
    }

    return cabin
  } catch (error) {
    throw new Error(`Failed to fetch cabin data. ${error}`)
  }
}
