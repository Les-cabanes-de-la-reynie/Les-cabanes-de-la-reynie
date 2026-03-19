import prisma from '@/shared/lib/prisma'

export const getYurt = async () => {
  try {
    const yurt = await prisma.yurt.findUnique({
      where: { id: 1 }
    })

    if (!yurt) {
      throw new Error('Yurt not found')
    }

    return yurt
  } catch (error) {
    throw new Error(`Failed to fetch yurt data. ${error}`)
  }
}
