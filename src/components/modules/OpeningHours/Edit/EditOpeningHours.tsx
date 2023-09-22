'use client'

import { FormEvent } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Button from '@/components/elements/Button'
import TableHeader from '../TableHeader'
import EditDayRow from './EditDayRow'
import { formatStringTimeIntoDate } from '@/utils/formatStringTimeIntoDate'

const EditOpeningHours = () => {
  const { t } = useTranslation('contact')

  const openingDaysEdit = [
    {
      dayTranslation: t('monday'),
      inputStartName: 'mondayStart',
      inputEndName: 'mondayEnd'
    },
    {
      dayTranslation: t('tuesday'),
      inputStartName: 'tuesdayStart',
      inputEndName: 'tuesdayEnd'
    },
    {
      dayTranslation: t('wednesday'),
      inputStartName: 'wednesdayStart',
      inputEndName: 'wednesdayEnd'
    },
    {
      dayTranslation: t('thursday'),
      inputStartName: 'thursdayStart',
      inputEndName: 'thursdayEnd'
    },
    {
      dayTranslation: t('friday'),
      inputStartName: 'fridayStart',
      inputEndName: 'fridayEnd'
    },
    {
      dayTranslation: t('saturday'),
      inputStartName: 'saturdayStart',
      inputEndName: 'saturdayEnd'
    },
    {
      dayTranslation: t('sunday'),
      inputStartName: 'sundayStart',
      inputEndName: 'sundayEnd'
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
  }

  return (
    <form onSubmit={handleLoginSubmit}>
      <table
        className='w-full flex-grow text-primary-black dark:text-white'
        data-test='openingHours'
      >
        <TableHeader day={t('day')} lunch={t('lunch')} dinner={t('dinner')} />
        <tbody className='text-center'>
          {openingDaysEdit?.map(
            ({ dayTranslation, inputStartName, inputEndName }) => (
              <EditDayRow
                key={dayTranslation}
                dayTranslation={dayTranslation}
                inputStartName={inputStartName}
                inputEndName={inputEndName}
              />
            )
          )}
        </tbody>
      </table>
      <Button type='submit' className='mt-5' kind='valid'>
        Mettre à jour
      </Button>
    </form>
  )
}
export default EditOpeningHours
