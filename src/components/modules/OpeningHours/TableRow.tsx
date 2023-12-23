'use client'

import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { cn } from '@/lib/utils'
import { OpeningHoursRowData } from './types'
import { PropsWithChildren } from 'react'

type TableRowProps = Pick<OpeningHoursRowData, 'day'> & PropsWithChildren

const TableRow = ({ day, children }: TableRowProps) => {
  const today = format(new Date(), 'eeee', { locale: enUS })

  return (
    <tr className={cn({ 'bg-primary text-white': day === today })}>
      {children}
    </tr>
  )
}
export default TableRow
