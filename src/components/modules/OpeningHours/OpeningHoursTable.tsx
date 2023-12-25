import { useTranslations } from 'next-intl'
import TableHeader from './TableHeader'
import DayRow from './DayRow'
import { OpeningHoursFormProps } from './types'

const OpeningHoursTable = ({ openingHoursData }: OpeningHoursFormProps) => {
  const t = useTranslations('Contact')

  return (
    <table className='h-full w-full flex-1' data-test='openingHours'>
      <TableHeader day={''} lunch={t('opening')} dinner={t('closing')} />
      <tbody className='text-center'>
        {openingHoursData?.map(
          ({
            day,
            dayTranslation,
            inputStartName,
            inputStartValue,
            inputEndName,
            inputEndValue
          }) => (
            <DayRow
              key={dayTranslation}
              day={day}
              dayTranslation={dayTranslation}
              inputStartName={inputStartName}
              inputStartValue={inputStartValue}
              inputEndName={inputEndName}
              inputEndValue={inputEndValue}
            />
          )
        )}
      </tbody>
    </table>
  )
}
export default OpeningHoursTable
