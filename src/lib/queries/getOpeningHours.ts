import { unstable_noStore } from 'next/cache'
import prisma from '../prisma'

export const getOpeningHours = async () => {
  unstable_noStore()

  return await prisma.openingHours.findMany({
    where: {
      id: 1
    }
  })
}
