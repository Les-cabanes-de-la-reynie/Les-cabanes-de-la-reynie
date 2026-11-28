import { CACHE_TAGS } from '@/shared/_constants/cacheTags'
import prisma from '@/shared/lib/prisma'
import { cacheLife, cacheTag } from 'next/cache'

export const getYurt = async () => {
  'use cache'
  cacheLife('hours')
  cacheTag(CACHE_TAGS.yurt)

  try {
    const yurt = await prisma.yurt.findUnique({
      where: { id: 1 }
    })

    if (!yurt) {
      throw new Error('Yurt not found')
    }

    return yurt
  } catch (error) {
    throw new Error(`Failed to fetch yurt data. ${error}`)
  }
}
