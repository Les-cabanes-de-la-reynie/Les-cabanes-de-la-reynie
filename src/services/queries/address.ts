import { db } from '@/lib/prisma'

export const getAddress = async () => {
  const data = await db.address.findMany({
    where: {
      id: 1
    }
  })

  return data[0]
}
