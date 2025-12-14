import prisma from '@/shared/lib/prisma'

export const getVisitorCount = async () => {
  try {
    const visitorCount = await prisma.visitorCount.findUnique({
      where: { id: 1 }
    })

    if (!visitorCount) {
      throw new Error('Visitor count not found')
    }

    return visitorCount.count
  } catch (error) {
    throw new Error(`Failed to fetch visitor count data. ${error}`)
  }
}
