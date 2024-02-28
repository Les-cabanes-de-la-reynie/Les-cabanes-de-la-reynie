import { OpeningHoursDataSchema } from '@/models/OpeningHours'
import { z } from 'zod'

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

export type OpeningHoursData = z.infer<typeof OpeningHoursDataSchema>

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
