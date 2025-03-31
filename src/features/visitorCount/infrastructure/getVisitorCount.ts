import prisma from '@/lib/prisma'

export const getVisitorCount = async () => {
  try {
    const data = await prisma.visitorCount.findMany({
      where: {
        id: 1
      }
    })

    return data[0]
  } catch (error) {
    throw new Error(`Failed to fetch visitor count data. ${error}`)
  }
}
