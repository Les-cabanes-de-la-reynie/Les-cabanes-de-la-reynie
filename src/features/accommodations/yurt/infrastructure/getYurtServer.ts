import prisma from '@/shared/lib/prisma'
import { Yurt } from '../_types'

const YURT_ID = 1

// Server-side function using Prisma (for SSG/SSR)
export const getYurtServer = async (): Promise<Yurt> => {
  const yurt = await prisma.yurt.findUnique({
    where: { id: YURT_ID }
  })

  if (!yurt) {
    throw new Error('Yurt not found')
  }

  return yurt
}
