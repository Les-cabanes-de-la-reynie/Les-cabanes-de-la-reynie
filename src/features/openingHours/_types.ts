import { OpeningHoursModel } from '@/app/generated/prisma/models'
import { OpeningHoursFormSchema } from './OpeningHoursSchema'
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

export type OpeningHoursData = OpeningHoursModel
export type OpeningHoursFormData = z.infer<typeof OpeningHoursFormSchema>
