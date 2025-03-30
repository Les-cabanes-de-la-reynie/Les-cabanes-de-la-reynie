import { db } from '@/lib/prisma'

export const getCabinData = async () => {
  try {
    const data = await db.cabin.findMany({
      where: {
        id: 1
      }
    })

    return data[0]
  } catch (error) {
    throw new Error(`Failed to fetch cabin data. ${error}`)
  }
}
