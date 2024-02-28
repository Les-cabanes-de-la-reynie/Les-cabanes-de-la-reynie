import P from '@/components/elements/P'
import { formatDateToTime } from '@/utils/date'
import { useTranslations } from 'next-intl'
import OpeningHoursForm from './OpeningHoursForm'
import {
  DaysOfTheWeekEnum,
  OpeningHoursData,
  OpeningHoursRowData
} from './types'

type OpeningHoursProps = {
  incomingOpeningHoursData: OpeningHoursData
  editable: boolean
}

const OpeningHours = ({
  incomingOpeningHoursData,
  editable
}: OpeningHoursProps) => {
  const t = useTranslations('Contact')

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
  } = incomingOpeningHoursData

  const openingHoursData: OpeningHoursRowData[] = [
    {
      day: DaysOfTheWeekEnum.Monday,
      dayTranslation: t('monday'),
      startDate: formatDateToTime(mondayStart),
      startDateKey: 'mondayStart',
      endDate: formatDateToTime(mondayEnd),
      endDateKey: 'mondayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Tuesday,
      dayTranslation: t('tuesday'),
      startDate: formatDateToTime(tuesdayStart),
      startDateKey: 'tuesdayStart',
      endDate: formatDateToTime(tuesdayEnd),
      endDateKey: 'tuesdayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Wednesday,
      dayTranslation: t('wednesday'),
      startDate: formatDateToTime(wednesdayStart),
      startDateKey: 'wednesdayStart',
      endDate: formatDateToTime(wednesdayEnd),
      endDateKey: 'wednesdayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Thursday,
      dayTranslation: t('thursday'),
      startDate: formatDateToTime(thursdayStart),
      startDateKey: 'thursdayStart',
      endDate: formatDateToTime(thursdayEnd),
      endDateKey: 'thursdayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Friday,
      dayTranslation: t('friday'),
      startDate: formatDateToTime(fridayStart),
      startDateKey: 'fridayStart',
      endDate: formatDateToTime(fridayEnd),
      endDateKey: 'fridayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Saturday,
      dayTranslation: t('saturday'),
      startDate: formatDateToTime(saturdayStart),
      startDateKey: 'saturdayStart',
      endDate: formatDateToTime(saturdayEnd),
      endDateKey: 'saturdayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Sunday,
      dayTranslation: t('sunday'),
      startDate: formatDateToTime(sundayStart),
      startDateKey: 'sundayStart',
      endDate: formatDateToTime(sundayEnd),
      endDateKey: 'sundayEnd'
    }
  ]

  return (
    <div className='flex flex-1 flex-col items-center justify-center'>
      <OpeningHoursForm
        openingHoursData={openingHoursData}
        editable={editable}
      />
      {!editable && (
        <P className='flex flex-col'>
          <span>{t('arrivalsDescription')}</span>
          <span>{t('departuresDescription')}</span>
        </P>
      )}
    </div>
  )
}
export default OpeningHours
