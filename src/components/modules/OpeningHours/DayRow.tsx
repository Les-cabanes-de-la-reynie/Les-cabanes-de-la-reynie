import { useLocale } from 'next-intl'
import { format } from 'date-fns'
import { enGB, enUS, fr } from 'date-fns/locale'
import { cn, formatStringTimeIntoDate } from '@/lib/utils'
import { OpeningHoursData } from './types'

const DayRow = ({
  day,
  dayTranslation,
  inputStartValue,
  inputEndValue
}: OpeningHoursData) => {
  const lang = useLocale()

  const today = format(new Date(), 'eeee', { locale: enUS })

  const startDate =
    lang === 'fr'
      ? format(
          new Date(formatStringTimeIntoDate(inputStartValue) as Date),
          'HH:mm',
          {
            locale: fr
          }
        )
      : format(
          new Date(formatStringTimeIntoDate(inputStartValue) as Date),
          'h:mm aaaa',
          {
            locale: enGB
          }
        )

  const endDate =
    lang === 'fr'
      ? format(
          new Date(formatStringTimeIntoDate(inputEndValue) as Date),
          'HH:mm',
          {
            locale: fr
          }
        )
      : format(
          new Date(formatStringTimeIntoDate(inputEndValue) as Date),
          'h:mm aaaa',
          {
            locale: enGB
          }
        )

  return (
    <tr className={cn({ 'bg-primary text-white': day === today })}>
      <th className='border px-2 py-2 align-middle sm:px-4'>
        {dayTranslation}
      </th>
      <td className='border px-2 py-2 align-middle sm:px-4'>
        <span>{startDate}</span>
      </td>
      <td className='border px-2 py-2 align-middle sm:px-4'>
        <span>{endDate}</span>
      </td>
    </tr>
  )
}
export default DayRow
