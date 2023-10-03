import { useMemo } from 'react'
import TimeInput from '@/components/fields/TimeInput'
import { DayRowEditProps } from '../types'

const DayRowEdit = ({
  dayTranslation,
  inputStartName,
  inputStartValue,
  inputEndName,
  inputEndValue,
  isEdit
}: DayRowEditProps) => {
  const openingValue = useMemo(
    () =>
      isEdit ? (
        <TimeInput
          name={inputStartName}
          defaultValue={String(inputStartValue) || ''}
        />
      ) : (
        <span>{String(inputStartValue)}</span>
      ),
    [isEdit, inputStartName, inputStartValue]
  )

  const closingValue = useMemo(
    () =>
      isEdit ? (
        <TimeInput
          name={inputEndName}
          defaultValue={String(inputEndValue) || ''}
        />
      ) : (
        <span>{String(inputEndValue)}</span>
      ),
    [isEdit, inputEndName, inputEndValue]
  )
  return (
    <tr>
      <th className='border border-zinc-800 px-2 py-2 align-middle sm:px-4'>
        {dayTranslation}
      </th>
      <td className='border border-zinc-800 px-2 py-2 align-middle sm:px-4'>
        {openingValue}
      </td>
      <td className='border border-zinc-800 px-2 py-2 align-middle sm:px-4'>
        {closingValue}
      </td>
    </tr>
  )
}
export default DayRowEdit
