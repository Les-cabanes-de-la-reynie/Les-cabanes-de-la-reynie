import TimeInput from '@/components/fields/TimeInput'

interface EditDayRowProps {
  dayTranslation: string
  inputStartName: string
  inputEndName: string
}

const EditDayRow = ({
  dayTranslation,
  inputStartName,
  inputEndName
}: EditDayRowProps) => {
  return (
    <tr>
      <th className='border border-border-dark px-2 py-2 align-middle sm:px-4'>
        {dayTranslation}
      </th>
      <td className='border border-border-dark px-2 py-2 align-middle sm:px-4'>
        <TimeInput name={inputStartName} />
      </td>
      <td className='border border-border-dark px-2 py-2 align-middle sm:px-4'>
        <TimeInput name={inputEndName} />
      </td>
    </tr>
  )
}
export default EditDayRow
