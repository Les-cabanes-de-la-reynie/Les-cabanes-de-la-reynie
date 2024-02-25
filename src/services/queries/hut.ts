import { db } from '@/lib/prisma'

export const revalidate = 0
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

export const getHutData = async () => {
  const data = await db.hut.findMany({
    where: {
      id: 1
    }
  })

  return data[0]
}
