import prisma from '@/shared/lib/prisma'

export const getAddress = async () => {
  try {
    const address = await prisma.address.findUnique({
      where: { id: 1 }
    })

    if (!address) {
      throw new Error('Address not found')
    }

    return address
  } catch (error) {
    throw new Error(`Failed to fetch address data. ${error}`)
  }
}
