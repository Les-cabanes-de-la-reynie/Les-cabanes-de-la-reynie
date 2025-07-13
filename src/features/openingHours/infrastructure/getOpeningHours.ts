import prisma from '@/shared/lib/prisma'

export const getOpeningHours = async () => {
  try {
    const data = await prisma.openingHours.findMany({
      where: {
        id: 1
      }
    })

    return data[0]
  } catch (error) {
    throw new Error(`Failed to fetch opening hours data. ${error}`)
  }
}
