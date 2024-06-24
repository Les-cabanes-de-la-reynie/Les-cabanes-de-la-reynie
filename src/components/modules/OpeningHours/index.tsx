import { IconContainer } from '@/components/elements/IconContainer'
import P from '@/components/elements/P'
import { formatDateToTime } from '@/utils/date'
import { AlertCircleIcon } from 'lucide-react'
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
        <div className='mt-4 flex'>
          <IconContainer className='mt-1'>
            <AlertCircleIcon className='stroke-primary w-5 h-5' />
          </IconContainer>
          <div>
            <P>{t('departuresDescription')}</P>
            <P className='[&:not(:first-child)]:mt-0'>
              {t('arrivalsDescription')}
            </P>
          </div>
        </div>
      )}
    </div>
  )
}
export default OpeningHours
