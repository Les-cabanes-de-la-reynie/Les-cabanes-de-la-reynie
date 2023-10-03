import { OpeningHoursData } from './types'

const DayRow = ({
  dayTranslation,
  inputStartValue,
  inputEndValue
}: OpeningHoursData) => {
  return (
    <tr>
      <th className='border border-zinc-800 px-2 py-2 align-middle sm:px-4'>
        {dayTranslation}
      </th>
      <td className='border border-zinc-800 px-2 py-2 align-middle sm:px-4'>
        <span>{String(inputStartValue)}</span>
      </td>
      <td className='border border-zinc-800 px-2 py-2 align-middle sm:px-4'>
        <span>{String(inputEndValue)}</span>
      </td>
    </tr>
  )
}
export default DayRow
