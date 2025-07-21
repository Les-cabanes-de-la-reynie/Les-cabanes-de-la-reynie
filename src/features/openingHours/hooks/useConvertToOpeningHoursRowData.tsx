import { formatDateToTime } from '@/shared/utils/date'
import { useTranslations } from 'next-intl'
import { DaysOfTheWeekEnum, OpeningHoursRowData } from '../_types'

type ConvertToOpeningHoursRowDataProps = {
  openingHoursData: {
    mondayStart: Date
    mondayEnd: Date
    tuesdayStart: Date
    tuesdayEnd: Date
    wednesdayStart: Date
    wednesdayEnd: Date
    thursdayStart: Date
    thursdayEnd: Date
    fridayStart: Date
    fridayEnd: Date
    saturdayStart: Date
    saturdayEnd: Date
    sundayStart: Date
    sundayEnd: Date
  }
}

export const useConvertToOpeningHoursRowData = ({
  openingHoursData
}: ConvertToOpeningHoursRowDataProps): OpeningHoursRowData[] => {
  const t = useTranslations('Contact')

  const openingHoursRowData: OpeningHoursRowData[] = [
    {
      day: DaysOfTheWeekEnum.Monday,
      dayTranslation: t('monday'),
      startDate: formatDateToTime(openingHoursData.mondayStart),
      startDateKey: 'mondayStart',
      endDate: formatDateToTime(openingHoursData.mondayEnd),
      endDateKey: 'mondayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Tuesday,
      dayTranslation: t('tuesday'),
      startDate: formatDateToTime(openingHoursData.tuesdayStart),
      startDateKey: 'tuesdayStart',
      endDate: formatDateToTime(openingHoursData.tuesdayEnd),
      endDateKey: 'tuesdayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Wednesday,
      dayTranslation: t('wednesday'),
      startDate: formatDateToTime(openingHoursData.wednesdayStart),
      startDateKey: 'wednesdayStart',
      endDate: formatDateToTime(openingHoursData.wednesdayEnd),
      endDateKey: 'wednesdayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Thursday,
      dayTranslation: t('thursday'),
      startDate: formatDateToTime(openingHoursData.thursdayStart),
      startDateKey: 'thursdayStart',
      endDate: formatDateToTime(openingHoursData.thursdayEnd),
      endDateKey: 'thursdayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Friday,
      dayTranslation: t('friday'),
      startDate: formatDateToTime(openingHoursData.fridayStart),
      startDateKey: 'fridayStart',
      endDate: formatDateToTime(openingHoursData.fridayEnd),
      endDateKey: 'fridayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Saturday,
      dayTranslation: t('saturday'),
      startDate: formatDateToTime(openingHoursData.saturdayStart),
      startDateKey: 'saturdayStart',
      endDate: formatDateToTime(openingHoursData.saturdayEnd),
      endDateKey: 'saturdayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Sunday,
      dayTranslation: t('sunday'),
      startDate: formatDateToTime(openingHoursData.sundayStart),
      startDateKey: 'sundayStart',
      endDate: formatDateToTime(openingHoursData.sundayEnd),
      endDateKey: 'sundayEnd'
    }
  ]

  return openingHoursRowData
}
