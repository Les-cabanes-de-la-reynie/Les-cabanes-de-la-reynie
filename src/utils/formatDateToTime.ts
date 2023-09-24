import { format } from 'date-fns'

export const formatDateToTime = (incomingDate: Date) =>
  format(new Date(incomingDate), 'HH:mm')
