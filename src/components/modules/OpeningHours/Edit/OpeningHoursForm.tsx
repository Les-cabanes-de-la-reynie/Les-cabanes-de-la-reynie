'use client'

import { FormEvent, useMemo } from 'react'
import TableHeader from '../TableHeader'
import useToggle from '@/hooks/useToggle'
import { OpeningHoursDayData, OpeningHoursFormProps } from '../types'
import DayRowEdit from './DayRowEdit'
import CancelButton from './CancelButton'
import EditButton from './EditButton'
import UpdateButton from './UpdateButton'
import { toast } from 'sonner'
import prisma from '@/lib/prisma'
import { formatStringTimeIntoDate } from '@/lib/utils'
import { revalidatePath } from 'next/cache'

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
        {isEdit && <UpdateButton />}
      </div>
    ),
    [isEdit, handleToggleEdit]
  )

  const openingHoursAction = async (formData: FormData) => {
    try {
      const arrFormData = Array.from(formData).map(([key, value]) => [
        key,
        formatStringTimeIntoDate(String(value))
      ])
      const openingHoursDayData: OpeningHoursDayData =
        Object.fromEntries(arrFormData)

      await prisma.openingHours.update({
        where: { id: 1 },
        data: openingHoursDayData
      })

      revalidatePath('/contact')
    } catch (error) {
      return error
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)

    const error = await openingHoursAction(formData)

    if (error) {
      return toast.error(
        `Attention les données n'ont pas pu être mis à jour. La raison : ${error}`
      )
    }

    toast.success('Les données ont bien été mis à jour !')
    handleToggleEdit()
  }

  return (
    <form onSubmit={handleSubmit} className='h-full w-full'>
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
