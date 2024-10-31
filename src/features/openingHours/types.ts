import { OpeningHoursSchema } from '@/features/openingHours/OpeningHoursSchema'
import { Prisma } from '@prisma/client'
import { z } from 'zod'
import { getOpeningHours } from './infrastructure/getOpeningHours'

export type GetOpeningHours = Prisma.PromiseReturnType<typeof getOpeningHours>

export enum DaysOfTheWeekEnum {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}

export type OpeningHoursRowData = {
  day: DaysOfTheWeekEnum
  dayTranslation: string
  startDate: string
  startDateKey: string
  endDate: string
  endDateKey: string
  isEdit?: boolean
}

export type OpeningHoursData = z.infer<typeof OpeningHoursSchema>

export type OpeningHoursFormProps = {
  openingHoursData: OpeningHoursRowData[]
  editable: boolean
}

export type TableHeaderProps = {
  day: string
  opening: string
  closing: string
}

export type DayRowEditProps = OpeningHoursRowData & {
  isEdit: boolean
}
