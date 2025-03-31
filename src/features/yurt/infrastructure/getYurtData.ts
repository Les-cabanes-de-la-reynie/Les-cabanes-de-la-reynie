import db from '@/lib/prisma'

export const getYurtData = async () => {
  try {
    const data = await db.yurt.findMany({
      where: {
        id: 1
      }
    })

    return data[0]
  } catch (error) {
    throw new Error(`Failed to fetch yurt data. ${error}`)
  }
}
