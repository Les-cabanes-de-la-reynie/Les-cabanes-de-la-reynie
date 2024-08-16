import { db } from '@/lib/prisma'

export const getAddress = async () => {
  try {
    const data = await db.address.findMany({
      where: {
        id: 1
      }
    })

    return data[0]
  } catch (error) {
    throw new Error(`Failed to fetch address data. ${error}`)
  }
}
