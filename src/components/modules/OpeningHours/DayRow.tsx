import { useMemo } from 'react'
import { OpeningHoursData } from './types'

const DayRow = ({
  dayTranslation,
  inputStartValue,
  inputEndValue
}: OpeningHoursData) => {
  const openingValue = useMemo(
    () =>
      !inputStartValue ? (
        <span>Closed</span>
      ) : (
        <span>{String(inputStartValue)}</span>
      ),
    [inputStartValue]
  )

  const closingValue = useMemo(
    () =>
      !inputEndValue ? (
        <span>Closed</span>
      ) : (
        <span>{String(inputEndValue)}</span>
      ),
    [inputEndValue]
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
export default DayRow
