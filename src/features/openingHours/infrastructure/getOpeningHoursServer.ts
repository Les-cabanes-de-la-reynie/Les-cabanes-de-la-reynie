import prisma from '@/shared/lib/prisma'
import { OpeningHoursData } from '../_types'

const OPENING_HOURS_ID = 1

// Server-side function using Prisma (for SSG/SSR)
export const getOpeningHoursServer = async (): Promise<OpeningHoursData> => {
  const openingHours = await prisma.openingHours.findUnique({
    where: { id: OPENING_HOURS_ID }
  })

  if (!openingHours) {
    throw new Error('Opening hours not found')
  }

  return openingHours
}
