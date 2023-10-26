import { useTranslations } from 'next-intl'
import { getOpeningHours } from 'db/queries/openingHours.query'
import OpeningHoursForm from './OpeningHoursForm'
import { DaysOfTheWeekEnum, OpeningHoursData } from '../types'
import { formatDateToTime } from 'utils/formatDateToTime'

const OpeningHoursEdit = async () => {
  const t = useTranslations('Contact')

  const jsonData = await getOpeningHours()

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
  } = jsonData[0]

  const openingHoursData: OpeningHoursData[] = [
    {
      day: DaysOfTheWeekEnum.Monday,
      dayTranslation: t('monday'),
      inputStartName: 'mondayStart',
      inputStartValue: formatDateToTime(mondayStart),
      inputEndName: 'mondayEnd',
      inputEndValue: formatDateToTime(mondayEnd)
    },
    {
      day: DaysOfTheWeekEnum.Tuesday,
      dayTranslation: t('tuesday'),
      inputStartName: 'tuesdayStart',
      inputStartValue: formatDateToTime(tuesdayStart),
      inputEndName: 'tuesdayEnd',
      inputEndValue: formatDateToTime(tuesdayEnd)
    },
    {
      day: DaysOfTheWeekEnum.Wednesday,
      dayTranslation: t('wednesday'),
      inputStartName: 'wednesdayStart',
      inputStartValue: formatDateToTime(wednesdayStart),
      inputEndName: 'wednesdayEnd',
      inputEndValue: formatDateToTime(wednesdayEnd)
    },
    {
      day: DaysOfTheWeekEnum.Thursday,
      dayTranslation: t('thursday'),
      inputStartName: 'thursdayStart',
      inputStartValue: formatDateToTime(thursdayStart),
      inputEndName: 'thursdayEnd',
      inputEndValue: formatDateToTime(thursdayEnd)
    },
    {
      day: DaysOfTheWeekEnum.Friday,
      dayTranslation: t('friday'),
      inputStartName: 'fridayStart',
      inputStartValue: formatDateToTime(fridayStart),
      inputEndName: 'fridayEnd',
      inputEndValue: formatDateToTime(fridayEnd)
    },
    {
      day: DaysOfTheWeekEnum.Saturday,
      dayTranslation: t('saturday'),
      inputStartName: 'saturdayStart',
      inputStartValue: formatDateToTime(saturdayStart),
      inputEndName: 'saturdayEnd',
      inputEndValue: formatDateToTime(saturdayEnd)
    },
    {
      day: DaysOfTheWeekEnum.Sunday,
      dayTranslation: t('sunday'),
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
