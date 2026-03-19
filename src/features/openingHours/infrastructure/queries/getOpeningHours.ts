import prisma from '@/shared/lib/prisma'

export const getOpeningHours = async () => {
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
