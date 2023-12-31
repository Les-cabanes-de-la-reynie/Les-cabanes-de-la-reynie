import { useLocale } from 'next-intl'
import { format } from 'date-fns'
import {
  convertDateWithoutTimeZone,
  formatStringTimeIntoDate
} from '@/lib/utils'
import { OpeningHoursRowData } from './types'
import TableRow from './TableRow'

const DayRow = ({
  day,
  dayTranslation,
  inputStartValue,
  inputEndValue
}: OpeningHoursRowData) => {
  const lang = useLocale()

  const startDateWithoutTimeZone = convertDateWithoutTimeZone(
    formatStringTimeIntoDate(inputStartValue)
  )
  const endDateWithoutTimeZone = convertDateWithoutTimeZone(
    formatStringTimeIntoDate(inputEndValue)
  )

  const startDate =
    lang === 'fr'
      ? format(startDateWithoutTimeZone, 'HH:mm')
      : format(startDateWithoutTimeZone, 'h:mm aaaa')

  const endDate =
    lang === 'fr'
      ? format(endDateWithoutTimeZone, 'HH:mm')
      : format(endDateWithoutTimeZone, 'h:mm aaaa')

  return (
    <TableRow day={day}>
      <th className='border px-2 py-2 align-middle sm:px-4'>
        {dayTranslation}
      </th>
      <td className='border px-2 py-2 align-middle sm:px-4'>
        <span>{startDate}</span>
      </td>
      <td className='border px-2 py-2 align-middle sm:px-4'>
        <span>{endDate}</span>
      </td>
    </TableRow>
  )
}
export default DayRow
