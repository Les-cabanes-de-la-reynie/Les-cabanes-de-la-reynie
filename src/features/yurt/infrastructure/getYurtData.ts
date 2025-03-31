import prisma from '@/lib/prisma'

export const getYurtData = async () => {
  try {
    const data = await prisma.yurt.findMany({
      where: {
        id: 1
      }
    })

    return data[0]
  } catch (error) {
    throw new Error(`Failed to fetch yurt data. ${error}`)
  }
}
