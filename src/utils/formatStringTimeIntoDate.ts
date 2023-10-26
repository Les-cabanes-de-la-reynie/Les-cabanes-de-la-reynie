import { add, startOfDay } from 'date-fns'

export const formatStringTimeIntoDate = (time: string) => {
  const hours = parseInt(time.split(':')[0], 10)
  const minutes = parseInt(time.split(':')[1], 10)

  // Generate new date that start at midnight and add incoming time on it
  const completDate = add(startOfDay(new Date()), {
    hours: hours,
    minutes: minutes
  })

  return completDate
}
