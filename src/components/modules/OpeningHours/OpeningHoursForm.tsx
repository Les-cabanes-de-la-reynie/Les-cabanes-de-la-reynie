'use client'

import useToggle from '@/hooks/useToggle'
import { updateOpeningHours } from '@/services/actions/updateOpeningHours'
import { formatFormDataIntoOpeningHoursData } from '@/utils/formats'
import { useTranslations } from 'next-intl'
import { toast } from 'sonner'
import EditableButtons from '../EditableButtons'
import DayRow from './DayRow'
import TableHeader from './TableHeader'
import { OpeningHoursFormProps } from './types'

const OpeningHoursForm = ({
  openingHoursData,
  editable
}: OpeningHoursFormProps) => {
  const [isEdit, handleToggleEdit] = useToggle(false)

  const t = useTranslations('Common')
  const t2 = useTranslations('Contact')

  return (
    <form
      action={async formData => {
        try {
          if (!editable) throw new Error('You cannot edit the opening hours!')

          const openingHoursData = formatFormDataIntoOpeningHoursData(formData)

          const { validationErrors, serverError } =
            await updateOpeningHours(openingHoursData)

          if (validationErrors) {
            return toast.error(
              'There was an error updating opening hours. Data are maybe invalid',
              {
                action: {
                  label: t('close'),
                  onClick: () => toast.dismiss()
                }
              }
            )
          }

          if (serverError) {
            return toast.error(serverError, {
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
          return toast.error(
            `Something went wrong! Cannot update opening hours. ${error}`,
            {
              action: {
                label: t('close'),
                onClick: () => toast.dismiss()
              }
            }
          )
        }
      }}
      className='h-full w-full'
    >
      <table className='w-full flex-grow'>
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
export default OpeningHoursForm
