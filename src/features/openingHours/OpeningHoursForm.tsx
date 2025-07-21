'use client'

import { EditableButtons } from '@/shared/components/editableButtons/EditableButtons'
import { Form } from '@/shared/components/ui/form'
import { useToggle } from '@/shared/hooks/useToggle'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { OpeningHoursData } from './_types'
import { DayRow } from './DayRow'
import { useConvertToOpeningHoursRowData } from './hooks/useConvertToOpeningHoursRowData'
import { OpeningHoursSchema } from './OpeningHoursSchema'
import { TableHeader } from './TableHeader'

type OpeningHoursFormProps = {
  openingHoursData: OpeningHoursData
  editable: boolean
}

export const OpeningHoursForm = ({
  openingHoursData,
  editable
}: OpeningHoursFormProps) => {
  const [isEdit, handleToggleEdit] = useToggle(false)

  const t = useTranslations('Common')
  const t2 = useTranslations('Contact')

  const form = useForm<OpeningHoursData>({
    resolver: zodResolver(OpeningHoursSchema),
    defaultValues: openingHoursData,
    disabled: !isEdit
  })

  // Convertir les données en format utilisable par DayRow
  const openingHoursRows = useConvertToOpeningHoursRowData({
    openingHoursData
  })

  const onAction = async (data: OpeningHoursData) => {
    try {
      console.log('data', data)
      // if (!editable) throw new Error('You cannot edit the opening hours!')

      // const openingHoursData = formatFormDataIntoOpeningHoursData(formData)

      // const res = await updateOpeningHours(openingHoursData)

      // if (res?.validationErrors) {
      //   toast.error(
      //     'There was an error updating opening hours. Data are maybe invalid',
      //     {
      //       action: {
      //         label: t('close'),
      //         onClick: () => toast.dismiss()
      //       }
      //     }
      //   )
      // }

      // if (res?.serverError) {
      //   toast.error(res.serverError, {
      //     action: {
      //       label: t('close'),
      //       onClick: () => toast.dismiss()
      //     }
      //   })
      // }

      // handleToggleEdit()

      // toast.success('Success ! The opening hours has been saved', {
      //   action: {
      //     label: t('close'),
      //     onClick: () => toast.dismiss()
      //   }
      // })
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onAction)} className='h-full w-full'>
        <table className='w-full grow'>
          <TableHeader day='' opening={t2('opening')} closing={t2('closing')} />
          <tbody className='text-center'>
            {openingHoursRows.map(rowData => (
              <DayRow
                key={rowData.day}
                day={rowData.day}
                dayTranslation={rowData.dayTranslation}
                startDate={rowData.startDate}
                startDateKey={rowData.startDateKey}
                endDate={rowData.endDate}
                endDateKey={rowData.endDateKey}
                isEdit={isEdit}
                form={form}
              />
            ))}
          </tbody>
        </table>

        <EditableButtons
          editable={editable}
          isEdit={isEdit}
          handleToggleEdit={handleToggleEdit}
        />
      </form>
    </Form>
  )
}
