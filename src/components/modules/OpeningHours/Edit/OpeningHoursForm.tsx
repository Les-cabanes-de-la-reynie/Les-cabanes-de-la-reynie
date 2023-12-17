'use client'

import { FormEventHandler, useMemo } from 'react'
import TableHeader from '../TableHeader'
import useToggle from '@/hooks/useToggle'
import { OpeningHoursFormProps } from '../types'
import DayRowEdit from './DayRowEdit'
import CancelButton from './CancelButton'
import EditButton from './EditButton'
import SubmitButton from './SubmitButton'
import { toast } from 'sonner'
import { openingHoursAction } from '@/services/actions/openingHours.action'

const OpeningHoursForm = ({ openingHoursData }: OpeningHoursFormProps) => {
  const [isEdit, handleToggleEdit] = useToggle(false)

  const editableSection = useMemo(
    () => (
      <div className='mt-4 flex justify-end gap-2'>
        {isEdit ? (
          <CancelButton onClick={handleToggleEdit} />
        ) : (
          <EditButton onClick={handleToggleEdit} />
        )}
        {isEdit && <SubmitButton>Mettre à jour</SubmitButton>}
      </div>
    ),
    [isEdit, handleToggleEdit]
  )

  const onSubmit: FormEventHandler<HTMLFormElement> = async e => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    const error = await openingHoursAction(formData)

    if (error?.message) {
      toast.error(
        `Attention les données n'ont pas pu être mis à jour. La raison : ${error}`
      )

      return
    }

    handleToggleEdit()

    toast.success('Les données ont bien été mis à jour !')
  }

  return (
    <form onSubmit={onSubmit} className='h-full w-full'>
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
