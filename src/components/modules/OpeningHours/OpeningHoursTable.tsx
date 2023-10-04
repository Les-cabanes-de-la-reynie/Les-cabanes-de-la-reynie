import { useMemo } from 'react'
import createTranslation from 'next-translate/createTranslation'
import TableHeader from './TableHeader'
import DayRow from './DayRow'
import { OpeningHoursFormProps } from './types'

const OpeningHoursTable = ({ openingHoursData }: OpeningHoursFormProps) => {
  const { t } = createTranslation('contact')

  const openingHoursDataMemorized = useMemo(
    () =>
      openingHoursData?.map(
        ({
          dayTranslation,
          inputStartName,
          inputStartValue,
          inputEndName,
          inputEndValue
        }) => (
          <DayRow
            key={dayTranslation}
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
      className='h-full w-full flex-1 text-primary-black dark:text-white'
      data-test='openingHours'
    >
      <TableHeader day={''} lunch={t('opening')} dinner={t('closing')} />
      <tbody className='text-center'>{openingHoursDataMemorized}</tbody>
    </table>
  )
}
export default OpeningHoursTable
