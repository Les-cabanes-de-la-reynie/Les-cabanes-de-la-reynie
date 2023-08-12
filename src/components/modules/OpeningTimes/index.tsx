import { getDictionary } from '@/lib/dictionary'
import { DaysOfTheWeekEnum, OpeningTimesProps } from './types'
import DayRow from './DayRow'
import TableHeader from './TableHeader'

const OpeningTimes = async ({ lang }: OpeningTimesProps) => {
  const { Restaurants } = await getDictionary(lang)

  return (
    <table className='flex-grow text-white' data-test='openingTimes'>
      <TableHeader
        day={Restaurants.day}
        lunch={Restaurants.lunch}
        dinner={Restaurants.dinner}
      />
      <tbody className='text-center'>
        <DayRow
          day={DaysOfTheWeekEnum.Monday}
          dayTranslation={Restaurants.monday}
          lunchTranslation={Restaurants.lunchWeeklyHours}
          dinnerTranslation={Restaurants.dinnerWeeklyHours}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Tuesday}
          dayTranslation={Restaurants.tuesday}
          lunchTranslation={Restaurants.lunchWeeklyHours}
          dinnerTranslation={Restaurants.dinnerWeeklyHours}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Wednesday}
          dayTranslation={Restaurants.wednesday}
          lunchTranslation={Restaurants.lunchWeeklyHours}
          dinnerTranslation={Restaurants.dinnerWeeklyHours}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Thursday}
          dayTranslation={Restaurants.thursday}
          lunchTranslation={Restaurants.lunchWeeklyHours}
          dinnerTranslation={Restaurants.dinnerWeeklyHours}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Friday}
          dayTranslation={Restaurants.friday}
          lunchTranslation={Restaurants.lunchWeeklyHours}
          dinnerTranslation={Restaurants.dinnerWeeklyHours}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Saturday}
          dayTranslation={Restaurants.saturday}
          lunchTranslation={Restaurants.lunchWeekendHours}
          dinnerTranslation={Restaurants.dinnerWeekendHours}
        />
        <DayRow
          day={DaysOfTheWeekEnum.Sunday}
          dayTranslation={Restaurants.sunday}
          lunchTranslation={Restaurants.lunchWeekendHours}
          dinnerTranslation={Restaurants.dinnerWeekendHours}
        />
      </tbody>
    </table>
  )
}

export default OpeningTimes
