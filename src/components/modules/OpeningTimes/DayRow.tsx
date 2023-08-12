import { cn } from '@/utils/cn'
import { format } from 'date-fns'
import { enUS } from 'date-fns/locale'
import { DayRowProps } from './types'

const DayRow = ({
  day,
  dayTranslation,
  lunchTranslation,
  dinnerTranslation
}: DayRowProps) => {
  const today = format(new Date(), 'eeee', { locale: enUS })

  return (
    <tr className={cn({ 'bg-primary': day === today })}>
      <th className='border border-border px-4 py-2 align-middle'>
        {dayTranslation}
      </th>
      <td className='border border-border px-4 py-2 align-middle'>
        {lunchTranslation}
      </td>
      <td className='border border-border px-4 py-2 align-middle'>
        {dinnerTranslation}
      </td>
    </tr>
  )
}
export default DayRow
