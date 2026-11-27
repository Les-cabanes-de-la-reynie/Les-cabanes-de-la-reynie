'use client'

import { cn } from '@/shared/utils/tailwind'
import { format } from 'date-fns/format'
import { enUS } from 'date-fns/locale'
import { PropsWithChildren } from 'react'
import { OpeningHoursRowData } from '../_types'

type TableRowProps = Pick<OpeningHoursRowData, 'day'> & PropsWithChildren

export const TableRow = ({ day, children }: TableRowProps) => {
  const today = format(new Date(), 'eeee', { locale: enUS })

  return (
    <tr
      className={cn('text-muted-foreground', {
        'bg-ink/16 font-semibold text-foreground': day === today
      })}
    >
      {children}
    </tr>
  )
}
