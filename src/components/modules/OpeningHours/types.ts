export enum DaysOfTheWeekEnum {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}

export interface DayRowProps {
  dayTranslation: string
  inputStartName: string
  inputStartValue: string
  inputEndName: string
  inputEndValue: string
  isEdit: boolean
}

export interface TableHeaderProps {
  day: string
  lunch: string
  dinner: string
}
