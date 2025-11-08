'use client'

import {
  CabinFormInput,
  CabinSchema
} from '@/features/accommodations/cabin/CabinSchema'
import { EditableButtons } from '@/shared/components/editableButtons/EditableButtons'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import { useToggle } from '@/shared/hooks/useToggle'
import { zodResolver } from '@hookform/resolvers/zod'
import { useSuspenseQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { CABIN_FIELDS } from './_const'
import { useUpdateCabin } from './hooks/useUpdateCabin'
import { getCabinOptions } from './infrastructure/getCabinOptions'

export const CabinForm = () => {
  const t = useTranslations('Common')

  const { data: cabinData } = useSuspenseQuery(getCabinOptions)

  const { updateCabinMutation, isPending } = useUpdateCabin()

  const [isEdit, handleToggleEdit] = useToggle(false)

  const form = useForm<CabinFormInput>({
    resolver: zodResolver(CabinSchema),
    defaultValues: {
      price: cabinData?.price ?? 0
    },
    disabled: !isEdit
  })

  const onSubmit = (data: CabinFormInput) => {
    updateCabinMutation(data)
    handleToggleEdit()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name={CABIN_FIELDS.price}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('price')}</FormLabel>
              <FormControl>
                <Input
                  type='number'
                  {...field}
                  onChange={e => field.onChange(e.target.valueAsNumber)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <EditableButtons
          editable={true}
          isEdit={isEdit}
          handleToggleEdit={handleToggleEdit}
          isPending={isPending}
        />
      </form>
    </Form>
  )
}
