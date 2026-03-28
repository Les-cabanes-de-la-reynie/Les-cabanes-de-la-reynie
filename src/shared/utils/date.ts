import { format } from 'date-fns/format'
import { parse } from 'date-fns/parse'

export const convertDateToTime = (incomingDate: Date) => {
  return format(incomingDate, 'HH:mm')
}

export const convertTimeIntoISOString = (time: string) => {
  return parse(time, 'HH:mm', new Date()).toISOString()
}
