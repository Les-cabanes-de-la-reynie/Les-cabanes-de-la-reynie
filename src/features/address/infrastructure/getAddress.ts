import prisma from '@/shared/lib/prisma'

export const getAddress = async () => {
  try {
    const data = await prisma.address.findMany({
      where: {
        id: 1
      }
    })

    return data[0]
  } catch (error) {
    throw new Error(`Failed to fetch address data. ${error}`)
  }
}
