import prisma from '@/shared/lib/prisma'

export const updateVisitorCount = async () => {
  try {
    const res = await prisma.visitorCount.upsert({
      where: { id: 1 },
      update: { count: { increment: 1 } }, // incremente automatically
      create: { id: 1, count: 1 } // if not yet created
    })
    return res.count
  } catch (error) {
    throw new Error(`Failed to update visitor count data. ${error}`)
  }
}
