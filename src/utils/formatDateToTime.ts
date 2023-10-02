import { format } from 'date-fns'

export const formatDateToTime = (incomingDate: string | null) => {
  if (!incomingDate) {
    return null
  }

  return format(new Date(incomingDate), 'HH:mm')
}
