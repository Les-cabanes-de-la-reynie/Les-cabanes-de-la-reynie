import { OpeningHoursDayData } from 'components/modules/OpeningHours/types'
import { prisma } from 'db/prisma'

export const getOpeningHours = () => prisma.openingHours.findMany()

interface updateOpeningHoursProps {
  id: number
  body: OpeningHoursDayData
}
export const updateOpeningHours = ({ id, body }: updateOpeningHoursProps) =>
  prisma.openingHours.update({
    where: { id },
    data: body
  })
