import TimeInput from '@/components/fields/TimeInput'

interface EditDayRowProps {
  dayTranslation: string
  inputStartName: string
  inputStartValue: string
  inputEndName: string
  inputEndValue: string
}

const EditDayRow = ({
  dayTranslation,
  inputStartName,
  inputStartValue,
  inputEndName,
  inputEndValue
}: EditDayRowProps) => {
  return (
    <tr>
      <th className='border border-border-dark px-2 py-2 align-middle sm:px-4'>
        {dayTranslation}
      </th>
      <td className='border border-border-dark px-2 py-2 align-middle sm:px-4'>
        <TimeInput
          name={inputStartName}
          defaultValue={String(inputStartValue) || ''}
        />
      </td>
      <td className='border border-border-dark px-2 py-2 align-middle sm:px-4'>
        <TimeInput
          name={inputEndName}
          defaultValue={String(inputEndValue) || ''}
        />
      </td>
    </tr>
  )
}
export default EditDayRow
