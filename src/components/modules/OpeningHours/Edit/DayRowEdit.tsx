import TimeInput from 'components/fields/TimeInput'
import { DayRowEditProps } from '../types'

const DayRowEdit = ({
  dayTranslation,
  inputStartName,
  inputStartValue,
  inputEndName,
  inputEndValue,
  isEdit
}: DayRowEditProps) => {
  const openingValue = isEdit ? (
    <TimeInput
      name={inputStartName}
      defaultValue={String(inputStartValue) || ''}
    />
  ) : (
    <span>{String(inputStartValue)}</span>
  )

  const closingValue = isEdit ? (
    <TimeInput name={inputEndName} defaultValue={String(inputEndValue) || ''} />
  ) : (
    <span>{String(inputEndValue)}</span>
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
