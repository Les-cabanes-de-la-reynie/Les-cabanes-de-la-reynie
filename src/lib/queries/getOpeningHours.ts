import prisma from '../prisma'

export const getOpeningHours = async () => {
  return await prisma.openingHours.findMany({
    where: {
      id: 1
    }
  })
}
