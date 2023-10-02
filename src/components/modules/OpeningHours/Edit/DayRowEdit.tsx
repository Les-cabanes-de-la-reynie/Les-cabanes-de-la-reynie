import { useMemo } from 'react'
import TimeInput from '@/components/fields/TimeInput'
import { DayRowEditProps } from '../types'
import CheckboxInput from '@/components/fields/CheckboxInput'

const DayRowEdit = ({
  dayTranslation,
  inputStartName,
  inputStartValue,
  inputEndName,
  inputEndValue,
  isEdit
}: DayRowEditProps) => {
  const closeEstablishmentCheckbox = useMemo(
    () =>
      isEdit && (
        <div className='flex justify-center'>
          <CheckboxInput
            label='Fermeture'
            className='flex flex-row items-center justify-center gap-2'
          />
        </div>
      ),
    [isEdit]
  )

  const openingValue = useMemo(
    () =>
      !inputStartValue ? (
        <span>Closed</span>
      ) : isEdit ? (
        <TimeInput
          name={inputStartName}
          defaultValue={String(inputStartValue) || ''}
        />
      ) : (
        <span>{String(inputStartValue)}</span>
      ),
    [inputStartValue, isEdit, inputStartName]
  )

  const closingValue = useMemo(
    () =>
      !inputEndValue ? null : isEdit ? (
        <TimeInput
          name={inputEndName}
          defaultValue={String(inputEndValue) || ''}
        />
      ) : (
        <span>{String(inputEndValue)}</span>
      ),
    [inputEndValue, isEdit, inputEndName]
  )
  return (
    <tr>
      <th className='border border-zinc-800 px-2 py-2 align-middle sm:px-4'>
        {dayTranslation}
        {closeEstablishmentCheckbox}
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
