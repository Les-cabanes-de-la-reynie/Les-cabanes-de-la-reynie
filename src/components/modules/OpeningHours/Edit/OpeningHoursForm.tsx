'use client'

import { useMemo } from 'react'
import TableHeader from '../TableHeader'
import useToggle from '@/hooks/useToggle'
import { OpeningHoursFormProps } from '../types'
import DayRowEdit from './DayRowEdit'
import CancelButton from './CancelButton'
import EditButton from './EditButton'
import SubmitButton from './SubmitButton'
import { toast } from 'sonner'
import { updateOpeningHours } from '@/services/actions/updateOpeningHours'
import { formatFormDataIntoOpeningHoursData } from '@/lib/utils'

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

  return (
    <form
      action={async formData => {
        try {
          const openingHoursData = formatFormDataIntoOpeningHoursData(formData)

          const { validationError, serverError } =
            await updateOpeningHours(openingHoursData)

          if (validationError) {
            return toast.error(
              'There was an error updating opening hours. Data are maybe invalid'
            )
          }

          if (serverError) {
            return toast.error(serverError)
          }

          handleToggleEdit()

          toast.success('Success ! The opening hours has been saved')
        } catch (error) {
          return toast.error(
            `Something went wrong! Cannot update opening hours. ${error}`
          )
        }
      }}
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
