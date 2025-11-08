'use client'

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
import { YurtFormInput, YurtFormOutput, YurtSchema } from './YurtSchema'
import { YURT_FIELDS } from './_const'
import { useUpdateYurt } from './hooks/useUpdateYurt'
import { getYurtOptions } from './infrastructure/getYurtOptions'

export const YurtForm = () => {
  const t = useTranslations('Common')

  const { data: yurt } = useSuspenseQuery(getYurtOptions)

  const { updateYurtMutation, isPending } = useUpdateYurt()

  const [isEdit, handleToggleEdit] = useToggle(false)

  const form = useForm<YurtFormInput>({
    resolver: zodResolver(YurtSchema),
    defaultValues: {
      price: yurt?.price ?? 0
    },
    disabled: !isEdit
  })

  const onSubmit = (raw: YurtFormInput) => {
    const data: YurtFormOutput = YurtSchema.parse(raw)
    updateYurtMutation(data)

    handleToggleEdit()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name={YURT_FIELDS.price}
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
