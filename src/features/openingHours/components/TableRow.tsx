'use client'

import { cn } from '@/shared/utils/tailwind'
import { PropsWithChildren, useSyncExternalStore } from 'react'
import { OpeningHoursRowData } from '../_types'

type TableRowProps = Pick<OpeningHoursRowData, 'day'> & PropsWithChildren

const parisWeekday = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  timeZone: 'Europe/Paris'
})

const subscribe = () => () => {}
const getToday = () => parisWeekday.format(new Date())
// Prerendered HTML has no "today": the visitor's day is only known in the browser
const getServerToday = () => null

export const TableRow = ({ day, children }: TableRowProps) => {
  const today = useSyncExternalStore(subscribe, getToday, getServerToday)
  const isToday = day === today

  return (
    <tr
      aria-current={isToday ? 'date' : undefined}
      className={cn('text-muted-foreground', {
        'bg-ink/16 font-semibold text-foreground': isToday
      })}
    >
      {children}
    </tr>
  )
}
