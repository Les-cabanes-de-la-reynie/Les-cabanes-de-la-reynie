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
  mondayStart: string | null
  mondayEnd: string | null
  tuesdayStart: string | null
  tuesdayEnd: string | null
  wednesdayStart: string | null
  wednesdayEnd: string | null
  thursdayStart: string | null
  thursdayEnd: string | null
  fridayStart: string | null
  fridayEnd: string | null
  saturdayStart: string | null
  saturdayEnd: string | null
  sundayStart: string | null
  sundayEnd: string | null
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
