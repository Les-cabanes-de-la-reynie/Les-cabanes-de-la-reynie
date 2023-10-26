import { format } from 'date-fns'

export const formatDateToTime = (incomingDate: Date | null) => {
  if (!incomingDate) {
    return null
  }

  return format(new Date(incomingDate), 'HH:mm')
}
