import prisma from '@/shared/lib/prisma'
import { Cabin } from '../_types'

const CABIN_ID = 1

// Server-side function using Prisma (for SSG/SSR)
export const getCabinServer = async (): Promise<Cabin> => {
  const cabin = await prisma.cabin.findUnique({
    where: { id: CABIN_ID }
  })

  if (!cabin) {
    throw new Error('Cabin not found')
  }

  return cabin
}
