'use client'

import { FormEventHandler, useMemo, useTransition } from 'react'
import { useRouter } from 'next/navigation'
import TableHeader from '../TableHeader'
import useToggle from '@/hooks/useToggle'
import { OpeningHoursFormProps, OpeningHoursWeekData } from '../types'
import DayRowEdit from './DayRowEdit'
import CancelButton from './CancelButton'
import EditButton from './EditButton'
import UpdateButton from './UpdateButton'
import { toast } from 'sonner'
import { openingHoursAction } from '@/lib/actions/openingHours.action'
import { formatStringTimeIntoDate } from '@/lib/utils'

const OpeningHoursForm = ({ openingHoursData }: OpeningHoursFormProps) => {
  const [, startTransition] = useTransition()
  const [isEdit, handleToggleEdit] = useToggle(false)
  const router = useRouter()

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

  const handleSubmit: FormEventHandler<HTMLFormElement> = async e => {
    const formData = new FormData(e.currentTarget)

    const allFormData = Array.from(formData) as [
      [keyof OpeningHoursWeekData, string]
    ]

    const OpeningHoursWeekData = allFormData.reduce((acc, curr) => {
      const [key, value] = curr

      acc[key] = formatStringTimeIntoDate(value)

      return acc
    }, {} as OpeningHoursWeekData)

    const data = JSON.parse(JSON.stringify(OpeningHoursWeekData))

    const error = await openingHoursAction(data)

    if (error) {
      toast.error(
        `Attention les données n'ont pas pu être mis à jour. La raison : ${error}`
      )

      return
    }

    handleToggleEdit()

    router.refresh()

    toast.success('Les données ont bien été mis à jour !')
  }

  return (
    <form
      onSubmit={e => startTransition(() => handleSubmit(e))}
      className='h-full w-full'
    >
      <table className='w-full flex-grow' data-test='openingHours'>
        <TableHeader day={''} lunch={'Ouverture'} dinner={'Fermeture'} />
        <tbody className='text-center'>
          {openingHoursData?.map(
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
          )}
        </tbody>
      </table>
      {editableSection}
    </form>
  )
}
export default OpeningHoursForm
