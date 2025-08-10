import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import { UseFormReturn } from 'react-hook-form'
import { TableRow } from './TableRow'
import {
  OpeningHoursData,
  OpeningHoursFormData,
  OpeningHoursRowData
} from './_types'

type DayRowProps = OpeningHoursRowData & {
  form: UseFormReturn<OpeningHoursFormData>
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
  const openingDate = isEdit ? (
    <FormField
      control={form.control}
      name={startDateKey as keyof OpeningHoursData}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input type='time' required {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : (
    <span>{startDate}</span>
  )

  const closingDate = isEdit ? (
    <FormField
      control={form.control}
      name={endDateKey as keyof OpeningHoursData}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input type='time' required {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  ) : (
    <span>{endDate}</span>
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
