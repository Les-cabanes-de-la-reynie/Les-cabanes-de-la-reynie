import { db } from '@/lib/prisma'
import { Address } from '@/_types/address'

export const getAddress = async () => {
  const data = await db.address.findMany({
    where: {
      id: 1
    }
  })

  return data[0] as Address
}
