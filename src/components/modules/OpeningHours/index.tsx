'use client'

import { FormEvent } from 'react'
import useTranslation from 'next-translate/useTranslation'
import TableHeader from './TableHeader'
import { formatDateToTime } from '@/utils/formatDateToTime'
import Button from '@/components/elements/Button'
import { formatStringTimeIntoDate } from '@/utils/formatStringTimeIntoDate'
import useToggle from '@/hooks/useToggle'
import DayRow from './DayRow'
import { cn } from '@/utils/cn'

interface OpeningHoursProps {
  isEditable?: boolean
}

const OpeningHours = async ({ isEditable = false }: OpeningHoursProps) => {
  const { t } = useTranslation('contact')

  const [isEdit, handleToggleEdit] = useToggle(false)

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/openingHours`
  )
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

  const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
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

    console.log({ sundayStart, sundayEnd })
  }

  return (
    <form
      onSubmit={handleLoginSubmit}
      className={cn({ 'flex flex-1': !isEditable })}
    >
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
              <DayRow
                key={dayTranslation}
                dayTranslation={dayTranslation}
                inputStartName={inputStartName}
                inputStartValue={inputStartValue}
                inputEndName={inputEndName}
                inputEndValue={inputEndValue}
                isEdit={isEdit}
              />
            )
          )}
        </tbody>
      </table>
      {isEditable && isEdit ? (
        <Button
          onClick={() => handleToggleEdit()}
          className='mt-5'
          kind='border'
        >
          Cancel
        </Button>
      ) : isEditable ? (
        <Button
          onClick={() => handleToggleEdit()}
          className='mt-5'
          kind='border'
        >
          Edit
        </Button>
      ) : null}
      {isEditable && isEdit && (
        <Button type='submit' className='mt-5' kind='valid'>
          Mettre à jour
        </Button>
      )}
    </form>
  )
}
export default OpeningHours
