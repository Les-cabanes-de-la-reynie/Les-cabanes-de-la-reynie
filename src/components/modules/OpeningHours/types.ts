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
  inputStartName?: string
  inputStartValue: string
  inputEndName?: string
  inputEndValue: string
}

export type OpeningHoursData = z.infer<typeof OpeningHoursDataSchema>

export type OpeningHoursFormProps = {
  openingHoursData: OpeningHoursRowData[]
}

export type TableHeaderProps = {
  day: string
  opening: string
  closing: string
}

export type DayRowEditProps = OpeningHoursRowData & {
  isEdit: boolean
}
