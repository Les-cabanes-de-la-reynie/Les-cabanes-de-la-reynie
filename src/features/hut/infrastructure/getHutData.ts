import { db } from '@/lib/prisma'

export const getHutData = async () => {
  try {
    const data = await db.hut.findMany({
      where: {
        id: 1
      }
    })

    return data[0]
  } catch (error) {
    throw new Error(`Failed to fetch hut data. ${error}`)
  }
}
