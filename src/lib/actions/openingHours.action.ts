'use server'

import prisma from '../prisma'

export const getOpeningHours = async () => {
  'use server'

  return await prisma.openingHours.findMany({
    where: {
      id: 1
    }
  })
}
