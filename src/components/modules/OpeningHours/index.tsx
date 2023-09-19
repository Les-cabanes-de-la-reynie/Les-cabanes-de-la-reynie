import useTranslation from 'next-translate/useTranslation'
import { DaysOfTheWeekEnum } from './types'
import DayRow from './DayRow'
import TableHeader from './TableHeader'

const OpeningHours = () => {
  const { t } = useTranslation('contact')

  const openingDays = [
    {
      day: DaysOfTheWeekEnum.Monday,
      dayTranslation: t('monday'),
      lunchTranslation: t('lunchWeeklyHours'),
      dinnerTranslation: t('dinnerWeeklyHours')
    },
    {
      day: DaysOfTheWeekEnum.Tuesday,
      dayTranslation: t('tuesday'),
      lunchTranslation: t('lunchWeeklyHours'),
      dinnerTranslation: t('dinnerWeeklyHours')
    },
    {
      day: DaysOfTheWeekEnum.Wednesday,
      dayTranslation: t('wednesday'),
      lunchTranslation: t('lunchWeeklyHours'),
      dinnerTranslation: t('dinnerWeeklyHours')
    },
    {
      day: DaysOfTheWeekEnum.Thursday,
      dayTranslation: t('thursday'),
      lunchTranslation: t('lunchWeeklyHours'),
      dinnerTranslation: t('dinnerWeeklyHours')
    },
    {
      day: DaysOfTheWeekEnum.Friday,
      dayTranslation: t('friday'),
      lunchTranslation: t('lunchWeeklyHours'),
      dinnerTranslation: t('dinnerWeeklyHours')
    },
    {
      day: DaysOfTheWeekEnum.Saturday,
      dayTranslation: t('saturday'),
      lunchTranslation: t('lunchWeekendHours'),
      dinnerTranslation: t('dinnerWeekendHours')
    },
    {
      day: DaysOfTheWeekEnum.Sunday,
      dayTranslation: t('sunday'),
      lunchTranslation: t('lunchWeekendHours'),
      dinnerTranslation: t('dinnerWeekendHours')
    }
  ]

  return (
    <table
      className='flex-grow text-primary-black dark:text-white'
      data-test='openingHours'
    >
      <TableHeader day={t('day')} lunch={t('lunch')} dinner={t('dinner')} />
      <tbody className='text-center'>
        {openingDays?.map(
          ({ day, dayTranslation, lunchTranslation, dinnerTranslation }) => (
            <DayRow
              day={day}
              dayTranslation={dayTranslation}
              lunchTranslation={lunchTranslation}
              dinnerTranslation={dinnerTranslation}
            />
          )
        )}
      </tbody>
    </table>
  )
}

export default OpeningHours
