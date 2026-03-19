import prisma from '@/shared/lib/prisma'

export const getCabin = async () => {
  try {
    const cabin = await prisma.cabin.findUnique({
      where: { id: 1 }
    })

    if (!cabin) {
      throw new Error('Cabin not found')
    }

    return cabin
  } catch (error) {
    throw new Error(`Failed to fetch cabin data. ${error}`)
  }
}
