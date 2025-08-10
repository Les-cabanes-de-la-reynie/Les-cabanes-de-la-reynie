'use client'

import { EditableButtons } from '@/shared/components/editableButtons/EditableButtons'
import { Form } from '@/shared/components/ui/form'
import { useToggle } from '@/shared/hooks/useToggle'
import { convertFormDataTimeIntoISOString } from '@/shared/utils/date'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { OpeningHoursFormData } from './_types'
import { DayRow } from './DayRow'
import { useConvertToOpeningHoursRowData } from './hooks/useConvertToOpeningHoursRowData'
import { useUpdateOpeningHours } from './hooks/useUpdateOpeningHours'
import { OpeningHoursFormSchema } from './OpeningHoursSchema'
import { TableHeader } from './TableHeader'

type OpeningHoursFormProps = {
  openingHoursFormData: OpeningHoursFormData
  editable: boolean
}

export const OpeningHoursForm = ({
  openingHoursFormData,
  editable
}: OpeningHoursFormProps) => {
  const { updateOpeningHoursMutation, isPending } = useUpdateOpeningHours()

  const [isEdit, handleToggleEdit] = useToggle(false)

  const tContact = useTranslations('Contact')

  const form = useForm<OpeningHoursFormData>({
    resolver: zodResolver(OpeningHoursFormSchema),
    defaultValues: openingHoursFormData,
    disabled: !isEdit
  })

  // Convertir les données en format utilisable par DayRow
  const openingHoursRows = useConvertToOpeningHoursRowData({
    openingHoursFormData
  })

  const onSubmit = (formData: OpeningHoursFormData) => {
    if (!editable) throw new Error('You cannot edit the opening hours!')

    const openingHoursData = convertFormDataTimeIntoISOString(formData)

    updateOpeningHoursMutation(openingHoursData)

    handleToggleEdit()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='h-full w-full'>
        <table className='w-full grow'>
          <TableHeader
            day=''
            opening={tContact('opening')}
            closing={tContact('closing')}
          />
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
          isPending={isPending}
        />
      </form>
    </Form>
  )
}
