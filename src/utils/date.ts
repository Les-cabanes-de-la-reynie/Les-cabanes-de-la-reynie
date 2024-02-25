import { format } from 'date-fns'

export const formatStringTimeIntoDate = (time: string) =>
  new Date(`2023-11-27T${time}:00.000Z`)

export const convertDateWithoutTimeZone = (incomingDate: Date) =>
  new Date(incomingDate.toISOString().slice(0, -1))

export const formatDateToTime = (incomingDate: Date) => {
  const dateWithoutTimeZone = convertDateWithoutTimeZone(incomingDate)

  return format(dateWithoutTimeZone, 'HH:mm')
}
