import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import {
  convertDateWithoutTimeZone,
  convertTimeIntoDate
} from '@/shared/utils/date'
import { format } from 'date-fns'
import { useLocale } from 'next-intl'
import { UseFormReturn } from 'react-hook-form'
import { TableRow } from './TableRow'
import { OpeningHoursData, OpeningHoursRowData } from './_types'

type DayRowProps = OpeningHoursRowData & {
  form: UseFormReturn<OpeningHoursData>
}

export const DayRow = ({
  day,
  dayTranslation,
  startDate,
  startDateKey,
  endDate,
  endDateKey,
  isEdit,
  form
}: DayRowProps) => {
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
    <FormField
      control={form.control}
      name={startDateKey as keyof OpeningHoursData}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              type='time'
              {...field}
              value={field.value ? format(field.value as Date, 'HH:mm') : ''}
              onChange={e => {
                const [hours, minutes] = e.target.value.split(':')
                const date = new Date()
                date.setHours(parseInt(hours), parseInt(minutes), 0, 0)
                field.onChange(date)
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : (
    <span>{formattedOpeningDate}</span>
  )

  const closingDate = isEdit ? (
    <FormField
      control={form.control}
      name={endDateKey as keyof OpeningHoursData}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              type='time'
              {...field}
              value={field.value ? format(field.value as Date, 'HH:mm') : ''}
              onChange={e => {
                const [hours, minutes] = e.target.value.split(':')
                const date = new Date()
                date.setHours(parseInt(hours), parseInt(minutes), 0, 0)
                field.onChange(date)
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : (
    <span>{formattedClosingDate}</span>
  )

  return (
    <TableRow day={day}>
      <th className='border border-input px-2 py-2 align-middle sm:px-4'>
        {dayTranslation}
      </th>
      <td className='border border-input px-2 py-2 align-middle sm:px-4'>
        {openingDate}
      </td>
      <td className='border border-input px-2 py-2 align-middle sm:px-4'>
        {closingDate}
      </td>
    </TableRow>
  )
}
