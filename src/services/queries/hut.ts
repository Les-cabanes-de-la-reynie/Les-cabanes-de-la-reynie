import { db } from '@/lib/prisma'

export const getHutData = async () => {
  const data = await db.hut.findMany({
    where: {
      id: 1
    }
  })

  return data[0]
}
