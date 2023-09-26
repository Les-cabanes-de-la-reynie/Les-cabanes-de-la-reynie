import TimeInput from '@/components/fields/TimeInput'
import { DayRowProps } from './types'

const DayRow = ({
  dayTranslation,
  inputStartName,
  inputStartValue,
  inputEndName,
  inputEndValue,
  isEdit
}: DayRowProps) => {
  return (
    <tr>
      <th className='border border-zinc-800 px-2 py-2 align-middle sm:px-4'>
        {dayTranslation}
        {isEdit && (
          <div className='flex justify-center'>
            <p className='mr-2'>Fermée ?</p>
            <input type='checkbox' />
          </div>
        )}
      </th>
      <td className='border border-zinc-800 px-2 py-2 align-middle sm:px-4'>
        {isEdit ? (
          <TimeInput
            name={inputStartName}
            defaultValue={String(inputStartValue) || ''}
          />
        ) : (
          <span>{String(inputStartValue)}</span>
        )}
      </td>
      <td className='border border-zinc-800 px-2 py-2 align-middle sm:px-4'>
        {isEdit ? (
          <TimeInput
            name={inputEndName}
            defaultValue={String(inputEndValue) || ''}
          />
        ) : (
          <span>{String(inputEndValue)}</span>
        )}
      </td>
    </tr>
  )
}
export default DayRow
