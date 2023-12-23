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

export type OpeningHoursData = {
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
  openingHoursData: OpeningHoursRowData[]
}

export type TableHeaderProps = {
  day: string
  lunch: string
  dinner: string
}

export type DayRowEditProps = OpeningHoursRowData & {
  isEdit: boolean
}
