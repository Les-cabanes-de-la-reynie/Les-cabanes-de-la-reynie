import useTranslation from 'next-translate/useTranslation'
import { DaysOfTheWeekEnum } from './types'
import DayRow from './DayRow'
import TableHeader from './TableHeader'

const OpeningTimes = () => {
  const { t } = useTranslation('restaurants')

  return (
    <table
      className='flex-grow text-zinc-800 dark:text-white'
      data-test='openingTimes'
    >
      <TableHeader day={t('day')} lunch={t('lunch')} dinner={t('dinner')} />
      <tbody className='text-center'>
        <DayRow
          day={DaysOfTheWeekEnum.Monday}
          dayTranslation={t('monday')}
          lunchTranslation={t('lunchWeeklyHours')}
          dinnerTranslation={t('dinnerWeeklyHours')}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Tuesday}
          dayTranslation={t('tuesday')}
          lunchTranslation={t('lunchWeeklyHours')}
          dinnerTranslation={t('dinnerWeeklyHours')}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Wednesday}
          dayTranslation={t('wednesday')}
          lunchTranslation={t('lunchWeeklyHours')}
          dinnerTranslation={t('dinnerWeeklyHours')}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Thursday}
          dayTranslation={t('thursday')}
          lunchTranslation={t('lunchWeeklyHours')}
          dinnerTranslation={t('dinnerWeeklyHours')}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Friday}
          dayTranslation={t('friday')}
          lunchTranslation={t('lunchWeeklyHours')}
          dinnerTranslation={t('dinnerWeeklyHours')}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Saturday}
          dayTranslation={t('saturday')}
          lunchTranslation={t('lunchWeekendHours')}
          dinnerTranslation={t('dinnerWeekendHours')}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Sunday}
          dayTranslation={t('sunday')}
          lunchTranslation={t('lunchWeekendHours')}
          dinnerTranslation={t('dinnerWeekendHours')}
        />
      </tbody>
    </table>
  )
}

export default OpeningTimes
