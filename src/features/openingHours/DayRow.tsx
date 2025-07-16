import { Input } from '@/shared/components/ui/input'
import {
  convertDateWithoutTimeZone,
  convertTimeIntoDate
} from '@/shared/utils/date'
import { format } from 'date-fns'
import { useLocale } from 'next-intl'
import { TableRow } from './TableRow'
import { OpeningHoursRowData } from './_types'

export const DayRow = ({
  day,
  dayTranslation,
  startDate,
  startDateKey,
  endDate,
  endDateKey,
  isEdit
}: OpeningHoursRowData) => {
  const lang = useLocale()

  const openingDateWithoutTimeZone = convertDateWithoutTimeZone(
    convertTimeIntoDate(startDate)
  )
  const closingDateWithoutTimeZone = convertDateWithoutTimeZone(
    convertTimeIntoDate(endDate)
  )

  const formattedOpeningDate =
    lang === 'fr'
      ? format(openingDateWithoutTimeZone, 'HH:mm')
      : format(openingDateWithoutTimeZone, 'h:mm aaaa')

  const formattedClosingDate =
    lang === 'fr'
      ? format(closingDateWithoutTimeZone, 'HH:mm')
      : format(closingDateWithoutTimeZone, 'h:mm aaaa')

  const openingDate = isEdit ? (
    <Input
      type='time'
      name={startDateKey}
      defaultValue={String(startDate) || ''}
    />
  ) : (
    <span>{formattedOpeningDate}</span>
  )

  const closingDate = isEdit ? (
    <Input type='time' name={endDateKey} defaultValue={String(endDate) || ''} />
  ) : (
    <span>{formattedClosingDate}</span>
  )

  return (
    <TableRow day={day}>
      <th className='border border-zinc-300 px-2 py-2 align-middle dark:border-zinc-800 sm:px-4'>
        {dayTranslation}
      </th>
      <td className='border border-zinc-300 px-2 py-2 align-middle dark:border-zinc-800 sm:px-4'>
        {openingDate}
      </td>
      <td className='border border-zinc-300 px-2 py-2 align-middle dark:border-zinc-800 sm:px-4'>
        {closingDate}
      </td>
    </TableRow>
  )
}
