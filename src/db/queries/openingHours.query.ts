import { OpeningHoursDayData } from '@/components/modules/OpeningHours/types'
import { prisma } from '../prisma'

export const getOpeningHours = async () =>
  await prisma.openingHours.findMany({
    where: {
      id: 1
    }
  })

export const updateOpeningHours = async ({
  body
}: {
  body: OpeningHoursDayData
}) =>
  await prisma.openingHours.update({
    data: body,
    where: { id: 1 }
  })
