import OpeningHoursForm from './OpeningHoursForm'
import { DaysOfTheWeekEnum, OpeningHoursRowData } from '../types'
import { formatDateToTime } from '@/lib/utils'
import { getOpeningHours } from '@/services/queries/openingHours'

const OpeningHoursEdit = async () => {
  const {
    mondayStart,
    mondayEnd,
    tuesdayStart,
    tuesdayEnd,
    wednesdayStart,
    wednesdayEnd,
    thursdayStart,
    thursdayEnd,
    fridayStart,
    fridayEnd,
    saturdayStart,
    saturdayEnd,
    sundayStart,
    sundayEnd
  } = await getOpeningHours()

  const openingHoursData: OpeningHoursRowData[] = [
    {
      day: DaysOfTheWeekEnum.Monday,
      dayTranslation: 'Lundi',
      inputStartName: 'mondayStart',
      inputStartValue: formatDateToTime(mondayStart),
      inputEndName: 'mondayEnd',
      inputEndValue: formatDateToTime(mondayEnd)
    },
    {
      day: DaysOfTheWeekEnum.Tuesday,
      dayTranslation: 'Mardi',
      inputStartName: 'tuesdayStart',
      inputStartValue: formatDateToTime(tuesdayStart),
      inputEndName: 'tuesdayEnd',
      inputEndValue: formatDateToTime(tuesdayEnd)
    },
    {
      day: DaysOfTheWeekEnum.Wednesday,
      dayTranslation: 'Mercredi',
      inputStartName: 'wednesdayStart',
      inputStartValue: formatDateToTime(wednesdayStart),
      inputEndName: 'wednesdayEnd',
      inputEndValue: formatDateToTime(wednesdayEnd)
    },
    {
      day: DaysOfTheWeekEnum.Thursday,
      dayTranslation: 'Jeudi',
      inputStartName: 'thursdayStart',
      inputStartValue: formatDateToTime(thursdayStart),
      inputEndName: 'thursdayEnd',
      inputEndValue: formatDateToTime(thursdayEnd)
    },
    {
      day: DaysOfTheWeekEnum.Friday,
      dayTranslation: 'Vendredi',
      inputStartName: 'fridayStart',
      inputStartValue: formatDateToTime(fridayStart),
      inputEndName: 'fridayEnd',
      inputEndValue: formatDateToTime(fridayEnd)
    },
    {
      day: DaysOfTheWeekEnum.Saturday,
      dayTranslation: 'Samedi',
      inputStartName: 'saturdayStart',
      inputStartValue: formatDateToTime(saturdayStart),
      inputEndName: 'saturdayEnd',
      inputEndValue: formatDateToTime(saturdayEnd)
    },
    {
      day: DaysOfTheWeekEnum.Sunday,
      dayTranslation: 'Dimanche',
      inputStartName: 'sundayStart',
      inputStartValue: formatDateToTime(sundayStart),
      inputEndName: 'sundayEnd',
      inputEndValue: formatDateToTime(sundayEnd)
    }
  ]

  return (
    <div className='flex flex-1 items-center justify-center'>
      <OpeningHoursForm openingHoursData={openingHoursData} />
    </div>
  )
}
export default OpeningHoursEdit
