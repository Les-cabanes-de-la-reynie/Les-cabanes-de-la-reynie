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
  day: string
  dayTranslation: string
  lunchTranslation: string
  dinnerTranslation: string
}

export interface TableHeaderProps {
  day: string
  lunch: string
  dinner: string
}
