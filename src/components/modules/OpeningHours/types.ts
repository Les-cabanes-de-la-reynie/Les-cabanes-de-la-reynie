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
  dayTranslation: string
  inputStartName?: string
  inputStartValue: string | null
  inputEndName?: string
  inputEndValue: string | null
}

export interface OpeningHoursDayData {
  mondayStart: Date | null
  mondayEnd: Date | null
  tuesdayStart: Date | null
  tuesdayEnd: Date | null
  wednesdayStart: Date | null
  wednesdayEnd: Date | null
  thursdayStart: Date | null
  thursdayEnd: Date | null
  fridayStart: Date | null
  fridayEnd: Date | null
  saturdayStart: Date | null
  saturdayEnd: Date | null
  sundayStart: Date | null
  sundayEnd: Date | null
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
