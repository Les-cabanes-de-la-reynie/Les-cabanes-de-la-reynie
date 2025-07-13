'use client'

import { updateOpeningHours } from '@/features/openingHours/infrastructure/actions/updateOpeningHours'
import { EditableButtons } from '@/shared/components/editableButtons/EditableButtons'
import { useToggle } from '@/shared/hooks/useToggle'
import { formatFormDataIntoOpeningHoursData } from '@/shared/utils/formats'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import { DayRow } from './DayRow'
import { TableHeader } from './TableHeader'
import { OpeningHoursFormProps } from './types'

export const OpeningHoursForm = ({
  openingHoursData,
  editable
}: OpeningHoursFormProps) => {
  const [isEdit, handleToggleEdit] = useToggle(false)

  const t = useTranslations('Common')
  const t2 = useTranslations('Contact')

  const onAction = async (formData: FormData) => {
    try {
      if (!editable) throw new Error('You cannot edit the opening hours!')

      const openingHoursData = formatFormDataIntoOpeningHoursData(formData)

      const res = await updateOpeningHours(openingHoursData)

      if (res?.validationErrors) {
        toast.error(
          'There was an error updating opening hours. Data are maybe invalid',
          {
            action: {
              label: t('close'),
              onClick: () => toast.dismiss()
            }
          }
        )
      }

      if (res?.serverError) {
        toast.error(res.serverError, {
          action: {
            label: t('close'),
            onClick: () => toast.dismiss()
          }
        })
      }

      handleToggleEdit()

      toast.success('Success ! The opening hours has been saved', {
        action: {
          label: t('close'),
          onClick: () => toast.dismiss()
        }
      })
    } catch (error) {
      toast.error(
        `Something went wrong! Cannot update opening hours. ${error}`,
        {
          action: {
            label: t('close'),
            onClick: () => toast.dismiss()
          }
        }
      )
    }
  }

  return (
    <form action={onAction} className='h-full w-full'>
      <table className='w-full grow'>
        <TableHeader day='' opening={t2('opening')} closing={t2('closing')} />
        <tbody className='text-center'>
          {openingHoursData?.map(
            ({
              day,
              dayTranslation,
              startDate,
              startDateKey,
              endDate,
              endDateKey
            }) => (
              <DayRow
                key={dayTranslation}
                day={day}
                dayTranslation={dayTranslation}
                startDate={startDate}
                startDateKey={startDateKey}
                endDate={endDate}
                endDateKey={endDateKey}
                isEdit={isEdit}
              />
            )
          )}
        </tbody>
      </table>

      <EditableButtons
        editable={editable}
        isEdit={isEdit}
        handleToggleEdit={handleToggleEdit}
      />
    </form>
  )
}
