import { useTranslations } from 'next-intl'
import {
  DaysOfTheWeekEnum,
  OpeningHoursFormData,
  OpeningHoursRowData
} from '../_types'

type ConvertToOpeningHoursRowDataProps = {
  openingHoursFormData: OpeningHoursFormData
}

export const useConvertToOpeningHoursRowData = ({
  openingHoursFormData
}: ConvertToOpeningHoursRowDataProps): OpeningHoursRowData[] => {
  const t = useTranslations('Contact')

  const openingHoursRowData: OpeningHoursRowData[] = [
    {
      day: DaysOfTheWeekEnum.Monday,
      dayTranslation: t('monday'),
      startDate: openingHoursFormData.mondayStart,
      startDateKey: 'mondayStart',
      endDate: openingHoursFormData.mondayEnd,
      endDateKey: 'mondayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Tuesday,
      dayTranslation: t('tuesday'),
      startDate: openingHoursFormData.tuesdayStart,
      startDateKey: 'tuesdayStart',
      endDate: openingHoursFormData.tuesdayEnd,
      endDateKey: 'tuesdayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Wednesday,
      dayTranslation: t('wednesday'),
      startDate: openingHoursFormData.wednesdayStart,
      startDateKey: 'wednesdayStart',
      endDate: openingHoursFormData.wednesdayEnd,
      endDateKey: 'wednesdayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Thursday,
      dayTranslation: t('thursday'),
      startDate: openingHoursFormData.thursdayStart,
      startDateKey: 'thursdayStart',
      endDate: openingHoursFormData.thursdayEnd,
      endDateKey: 'thursdayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Friday,
      dayTranslation: t('friday'),
      startDate: openingHoursFormData.fridayStart,
      startDateKey: 'fridayStart',
      endDate: openingHoursFormData.fridayEnd,
      endDateKey: 'fridayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Saturday,
      dayTranslation: t('saturday'),
      startDate: openingHoursFormData.saturdayStart,
      startDateKey: 'saturdayStart',
      endDate: openingHoursFormData.saturdayEnd,
      endDateKey: 'saturdayEnd'
    },
    {
      day: DaysOfTheWeekEnum.Sunday,
      dayTranslation: t('sunday'),
      startDate: openingHoursFormData.sundayStart,
      startDateKey: 'sundayStart',
      endDate: openingHoursFormData.sundayEnd,
      endDateKey: 'sundayEnd'
    }
  ]

  return openingHoursRowData
}
