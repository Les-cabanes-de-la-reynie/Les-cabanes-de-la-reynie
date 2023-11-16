export enum DaysOfTheWeekEnum {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}

export type OpeningHoursData = {
  day: DaysOfTheWeekEnum
  dayTranslation: string
  inputStartName?: string
  inputStartValue: string
  inputEndName?: string
  inputEndValue: string
}

export type OpeningHoursDayData = {
  mondayStart: Date
  mondayEnd: Date
  tuesdayStart: Date
  tuesdayEnd: Date
  wednesdayStart: Date
  wednesdayEnd: Date
  thursdayStart: Date
  thursdayEnd: Date
  fridayStart: Date
  fridayEnd: Date
  saturdayStart: Date
  saturdayEnd: Date
  sundayStart: Date
  sundayEnd: Date
}

export type OpeningHoursFormProps = {
  openingHoursData: OpeningHoursData[]
}

export type TableHeaderProps = {
  day: string
  lunch: string
  dinner: string
}

export type DayRowEditProps = OpeningHoursData & {
  isEdit: boolean
}
