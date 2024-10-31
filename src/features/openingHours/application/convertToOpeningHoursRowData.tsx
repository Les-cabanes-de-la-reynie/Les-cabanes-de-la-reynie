import { formatDateToTime } from '@/utils/date'
import { useTranslations } from 'next-intl'
import {
  DaysOfTheWeekEnum,
  OpeningHoursData,
  OpeningHoursRowData
} from '../types'

type convertToOpeningHoursRowDataProps = {
  incomingOpeningHoursData: OpeningHoursData
}

export const useConvertToOpeningHoursRowData = ({
  incomingOpeningHoursData
}: convertToOpeningHoursRowDataProps) => {
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

  return openingHoursData
}
