import { db } from '@/lib/prisma'

export const getYurtData = async () => {
  const data = await db.yurt.findMany({
    where: {
      id: 1
    }
  })

  return data[0]
}
