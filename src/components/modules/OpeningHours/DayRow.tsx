import { useLocale } from 'next-intl'
import { format } from 'date-fns'
import { enGB, fr } from 'date-fns/locale'
import { OpeningHoursData } from './types'
import { formatStringTimeIntoDate } from 'utils/formatStringTimeIntoDate'

const DayRow = ({
  dayTranslation,
  inputStartValue,
  inputEndValue
}: OpeningHoursData) => {
  const lang = useLocale()

  const startDate =
    lang === 'fr'
      ? format(
          new Date(formatStringTimeIntoDate(inputStartValue) as Date),
          'HH:mm',
          {
            locale: fr
          }
        )
      : format(
          new Date(formatStringTimeIntoDate(inputStartValue) as Date),
          'h:mm aaaa',
          {
            locale: enGB
          }
        )

  const endDate =
    lang === 'fr'
      ? format(
          new Date(formatStringTimeIntoDate(inputEndValue) as Date),
          'HH:mm',
          {
            locale: fr
          }
        )
      : format(
          new Date(formatStringTimeIntoDate(inputEndValue) as Date),
          'h:mm aaaa',
          {
            locale: enGB
          }
        )

  return (
    <tr>
      <th className='border border-zinc-800 px-2 py-2 align-middle sm:px-4'>
        {dayTranslation}
      </th>
      <td className='border border-zinc-800 px-2 py-2 align-middle sm:px-4'>
        <span>{startDate}</span>
      </td>
      <td className='border border-zinc-800 px-2 py-2 align-middle sm:px-4'>
        <span>{endDate}</span>
      </td>
    </tr>
  )
}
export default DayRow
