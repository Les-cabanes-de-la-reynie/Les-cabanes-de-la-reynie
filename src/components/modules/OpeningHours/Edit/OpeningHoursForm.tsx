'use client'

import { FormEvent, useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import TableHeader from '../TableHeader'
import { formatStringTimeIntoDate } from 'utils/formatStringTimeIntoDate'
import useToggle from 'hooks/useToggle'
import {
  DaysOfTheWeekEnum,
  OpeningHoursData,
  OpeningHoursDayData,
  OpeningHoursFormProps
} from '../types'
import DayRowEdit from './DayRowEdit'
import CancelButton from './CancelButton'
import EditButton from './EditButton'
import UpdateButton from './UpdateButton'
import { updateOpeningHours } from 'db/queries/openingHours.query'
import { formatDateToTime } from 'utils/formatDateToTime'

const OpeningHoursForm = ({
  openingHoursData: incomingData
}: OpeningHoursFormProps) => {
  const [openingHoursData, setOpeningHoursData] = useState(incomingData)

  const t = useTranslations('Contact')

  const [isEdit, handleToggleEdit] = useToggle(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const mondayStart = formatStringTimeIntoDate(
      String(formData.get('mondayStart'))
    )
    const mondayEnd = formatStringTimeIntoDate(
      String(formData.get('mondayEnd'))
    )

    const tuesdayStart = formatStringTimeIntoDate(
      String(formData.get('tuesdayStart'))
    )
    const tuesdayEnd = formatStringTimeIntoDate(
      String(formData.get('tuesdayEnd'))
    )

    const wednesdayStart = formatStringTimeIntoDate(
      String(formData.get('wednesdayStart'))
    )
    const wednesdayEnd = formatStringTimeIntoDate(
      String(formData.get('wednesdayEnd'))
    )

    const thursdayStart = formatStringTimeIntoDate(
      String(formData.get('thursdayStart'))
    )
    const thursdayEnd = formatStringTimeIntoDate(
      String(formData.get('thursdayEnd'))
    )

    const fridayStart = formatStringTimeIntoDate(
      String(formData.get('fridayStart'))
    )
    const fridayEnd = formatStringTimeIntoDate(
      String(formData.get('fridayEnd'))
    )

    const saturdayStart = formatStringTimeIntoDate(
      String(formData.get('saturdayStart'))
    )
    const saturdayEnd = formatStringTimeIntoDate(
      String(formData.get('saturdayEnd'))
    )

    const sundayStart = formatStringTimeIntoDate(
      String(formData.get('sundayStart'))
    )
    const sundayEnd = formatStringTimeIntoDate(
      String(formData.get('sundayEnd'))
    )

    const openingHoursDayData: OpeningHoursDayData = {
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
    }

    try {
      const jsonData = await updateOpeningHours({
        id: 1,
        body: openingHoursDayData
      })

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
      } = jsonData

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

      if (openingHoursData) {
        setOpeningHoursData(openingHoursData)
        toast.success('Les données ont bien été mis à jour !')
        handleToggleEdit()
      }
    } catch (error) {
      toast.error(
        `Attention les données n'ont pas pu être mis à jour. La raison : ${error}`
      )
    }
  }

  const openingHoursDataMemorized = useMemo(
    () =>
      openingHoursData?.map(
        ({
          day,
          dayTranslation,
          inputStartName,
          inputStartValue,
          inputEndName,
          inputEndValue
        }) => (
          <DayRowEdit
            key={dayTranslation}
            day={day}
            dayTranslation={dayTranslation}
            inputStartName={inputStartName}
            inputStartValue={inputStartValue}
            inputEndName={inputEndName}
            inputEndValue={inputEndValue}
            isEdit={isEdit}
          />
        )
      ),
    [isEdit, openingHoursData]
  )

  const editableSection = useMemo(
    () => (
      <div className='mt-4 flex justify-end gap-2'>
        {isEdit ? (
          <CancelButton onClick={handleToggleEdit} />
        ) : (
          <EditButton onClick={handleToggleEdit} />
        )}
        {isEdit && <UpdateButton />}
      </div>
    ),
    [isEdit, handleToggleEdit]
  )

  return (
    <form onSubmit={onSubmit} className='h-full w-full'>
      <table
        className='w-full flex-grow text-black dark:text-white'
        data-test='openingHours'
      >
        <TableHeader day={''} lunch={t('opening')} dinner={t('closing')} />
        <tbody className='text-center'>{openingHoursDataMemorized}</tbody>
      </table>
      {editableSection}
    </form>
  )
}
export default OpeningHoursForm
