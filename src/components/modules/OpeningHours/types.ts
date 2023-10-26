export enum DaysOfTheWeekEnum {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}

export interface OpeningHoursData {
  day: DaysOfTheWeekEnum
  dayTranslation: string
  inputStartName?: string
  inputStartValue: string
  inputEndName?: string
  inputEndValue: string
}

export interface OpeningHoursDayData {
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

export interface OpeningHoursFormProps {
  openingHoursData: OpeningHoursData[]
}

export interface TableHeaderProps {
  day: string
  lunch: string
  dinner: string
}

export interface DayRowEditProps extends OpeningHoursData {
  isEdit: boolean
}
