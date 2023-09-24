import useTranslation from 'next-translate/useTranslation'
import TableHeader from '../TableHeader'
import EditDayRow from './EditDayRow'
import { formatDateToTime } from '@/utils/formatDateToTime'

const EditOpeningHours = async () => {
  const { t } = useTranslation('contact')

  const url = process.env.NEXT_PUBLIC_BASE_URL as string

  const response = await fetch(`${url}/api/openingHours`)
  const openingHoursData = await response.json()
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
  } = openingHoursData[0]

  const openingDaysEdit = [
    {
      dayTranslation: t('monday'),
      inputStartName: 'mondayStart',
      inputStartValue: formatDateToTime(mondayStart),
      inputEndName: 'mondayEnd',
      inputEndValue: formatDateToTime(mondayEnd)
    },
    {
      dayTranslation: t('tuesday'),
      inputStartName: 'tuesdayStart',
      inputStartValue: formatDateToTime(tuesdayStart),
      inputEndName: 'tuesdayEnd',
      inputEndValue: formatDateToTime(tuesdayEnd)
    },
    {
      dayTranslation: t('wednesday'),
      inputStartName: 'wednesdayStart',
      inputStartValue: formatDateToTime(wednesdayStart),
      inputEndName: 'wednesdayEnd',
      inputEndValue: formatDateToTime(wednesdayEnd)
    },
    {
      dayTranslation: t('thursday'),
      inputStartName: 'thursdayStart',
      inputStartValue: formatDateToTime(thursdayStart),
      inputEndName: 'thursdayEnd',
      inputEndValue: formatDateToTime(thursdayEnd)
    },
    {
      dayTranslation: t('friday'),
      inputStartName: 'fridayStart',
      inputStartValue: formatDateToTime(fridayStart),
      inputEndName: 'fridayEnd',
      inputEndValue: formatDateToTime(fridayEnd)
    },
    {
      dayTranslation: t('saturday'),
      inputStartName: 'saturdayStart',
      inputStartValue: formatDateToTime(saturdayStart),
      inputEndName: 'saturdayEnd',
      inputEndValue: formatDateToTime(saturdayEnd)
    },
    {
      dayTranslation: t('sunday'),
      inputStartName: 'sundayStart',
      inputStartValue: formatDateToTime(sundayStart),
      inputEndName: 'sundayEnd',
      inputEndValue: formatDateToTime(sundayEnd)
    }
  ]

  return (
    <table
      className='w-full flex-grow text-primary-black dark:text-white'
      data-test='openingHours'
    >
      <TableHeader day={t('day')} lunch={t('lunch')} dinner={t('dinner')} />
      <tbody className='text-center'>
        {openingDaysEdit?.map(
          ({
            dayTranslation,
            inputStartName,
            inputStartValue,
            inputEndName,
            inputEndValue
          }) => (
            <EditDayRow
              key={dayTranslation}
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
export default EditOpeningHours
