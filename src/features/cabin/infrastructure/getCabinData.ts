import prisma from '@/shared/lib/prisma'

export const getCabinData = async () => {
  try {
    const data = await prisma.cabin.findMany({
      where: {
        id: 1
      }
    })

    return data[0]
  } catch (error) {
    throw new Error(`Failed to fetch cabin data. ${error}`)
  }
}
