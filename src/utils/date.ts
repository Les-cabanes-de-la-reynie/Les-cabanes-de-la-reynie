import { format } from 'date-fns'

export const formatStringTimeIntoDate = (time: string) => {
  return new Date(`2023-11-27T${time}:00.000Z`)
}

export const convertDateWithoutTimeZone = (incomingDate: Date) => {
  const newDate = new Date(incomingDate)

  return new Date(newDate.valueOf() + newDate.getTimezoneOffset() * 60 * 1000)
}

export const formatDateToTime = (incomingDate: Date) => {
  const dateWithoutTimeZone = convertDateWithoutTimeZone(incomingDate)

  return format(dateWithoutTimeZone, 'HH:mm')
}
