'use client'

import { FormEvent, useMemo } from 'react'
import useTranslation from 'next-translate/useTranslation'
import TableHeader from '../TableHeader'
import Button from '@/components/elements/Button'
import { formatStringTimeIntoDate } from '@/utils/formatStringTimeIntoDate'
import useToggle from '@/hooks/useToggle'
import { OpeningHoursFormProps } from '../types'
import { UpdateOpeningHours } from '@/lib/OpeningHours'
import { useRouter } from 'next/navigation'
import DayRowEdit from './DayRowEdit'

const OpeningHoursForm = ({ openingHoursData }: OpeningHoursFormProps) => {
  const { t } = useTranslation('contact')
  const { t: t2 } = useTranslation('common')

  const [isEdit, handleToggleEdit] = useToggle(false)

  const { refresh } = useRouter()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

    const openingHoursDayData = JSON.stringify({
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

    const openingHoursData = await UpdateOpeningHours(openingHoursDayData)

    if (openingHoursData) {
      refresh()
    }
  }

  const openingHoursDataMemorized = useMemo(
    () =>
      openingHoursData?.map(
        ({
          dayTranslation,
          inputStartName,
          inputStartValue,
          inputEndName,
          inputEndValue
        }) => (
          <DayRowEdit
            key={dayTranslation}
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
    ),
    [isEdit, handleToggleEdit, t2]
  )

  return (
    <form onSubmit={onSubmit} className='h-full w-full'>
      <table
        className='w-full flex-grow text-primary-black dark:text-white'
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
