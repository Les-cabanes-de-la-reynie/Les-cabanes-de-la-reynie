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
import { useRouter } from 'next/navigation'

interface OpeningHoursProps {
  isEditable?: boolean
}

const OpeningHours = async ({ isEditable = false }: OpeningHoursProps) => {
  const router = useRouter()

  const { t } = useTranslation('contact')
  const { t: t2 } = useTranslation('common')

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

  const handleLoginSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

    console.log('mondayStart', mondayStart)
    console.log('mondayEnd', mondayEnd)

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/openingHours/1`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
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
        })
      }
    )

    console.log('res.ok', res.ok)

    if (res.ok) {
      return router.refresh()
    }
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
        <TableHeader day={''} lunch={t('opening')} dinner={t('closing')} />
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
      {isEditable ? (
        <div className='mt-4 flex justify-end gap-2'>
          {isEdit ? (
            <Button onClick={() => handleToggleEdit()} kind='border'>
              {t2('cancel')}
            </Button>
          ) : (
            <Button onClick={() => handleToggleEdit()} kind='border'>
              {t2('edit')}
            </Button>
          )}
          {isEdit && (
            <Button type='submit' kind='valid'>
              {t2('update')}
            </Button>
          )}
        </div>
      ) : null}
    </form>
  )
}
export default OpeningHours
