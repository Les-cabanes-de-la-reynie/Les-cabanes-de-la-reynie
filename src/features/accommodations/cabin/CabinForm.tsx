'use client'

import { CabinSchema } from '@/features/accommodations/cabin/CabinSchema'
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
import { Cabin } from './_types'
import { useUpdateCabin } from './hooks/useUpdateCabin'
import { getCabinOptions } from './infrastructure/getCabinOptions'

export const CabinForm = () => {
  const t = useTranslations('Common')

  const { data: cabin } = useSuspenseQuery(getCabinOptions)

  const { updateCabinMutation, isPending } = useUpdateCabin()

  const [isEdit, handleToggleEdit] = useToggle(false)

  const form = useForm<Cabin>({
    resolver: zodResolver(CabinSchema),
    defaultValues: cabin,
    disabled: !isEdit
  })

  const onSubmit = (data: Cabin) => {
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
                <Input type='number' {...field} />
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
