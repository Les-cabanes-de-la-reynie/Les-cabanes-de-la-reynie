'use client'

import { cn } from '@/utils/tailwind'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { PropsWithChildren } from 'react'
import { OpeningHoursRowData } from './types'

type TableRowProps = Pick<OpeningHoursRowData, 'day'> & PropsWithChildren

const TableRow = ({ day, children }: TableRowProps) => {
  const today = format(new Date(), 'eeee', { locale: enUS })

  return (
    <tr
      className={cn('text-muted-foreground', {
        'bg-primary text-white': day === today
      })}
    >
      {children}
    </tr>
  )
}
export default TableRow
