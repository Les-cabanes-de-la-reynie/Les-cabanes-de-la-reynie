import { useMemo } from 'react'
import { useTranslations } from 'next-intl'
import TableHeader from './TableHeader'
import DayRow from './DayRow'
import { OpeningHoursFormProps } from './types'

const OpeningHoursTable = ({ openingHoursData }: OpeningHoursFormProps) => {
  const t = useTranslations('Contact')

  const openingHoursDataMemorized = useMemo(
    () =>
      openingHoursData?.map(
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
      ),
    [openingHoursData]
  )

  return (
    <table
      className='h-full w-full flex-1 text-black dark:text-white'
      data-test='openingHours'
    >
      <TableHeader day={''} lunch={t('opening')} dinner={t('closing')} />
      <tbody className='text-center'>{openingHoursDataMemorized}</tbody>
    </table>
  )
}
export default OpeningHoursTable
