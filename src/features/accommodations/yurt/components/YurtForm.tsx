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
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { YURT_FIELDS } from '../_const'
import { updateYurt } from '../infrastructure/actions/updateYurt'
import { getYurt } from '../infrastructure/queries/getYurt'
import { YurtFormInput, YurtSchema } from '../YurtSchema'

export const YurtForm = async () => {
  const t = useTranslations('Common')

  const yurtData = await getYurt()

  const [isPending, startTransition] = useTransition()
  const [isEdit, handleToggleEdit] = useToggle(false)

  const form = useForm<YurtFormInput>({
    resolver: zodResolver(YurtSchema),
    defaultValues: {
      price: yurtData?.price ?? 0
    },
    disabled: !isEdit
  })

  const onSubmit = (data: YurtFormInput) => {
    startTransition(async () => {
      const res = await updateYurt(data)

      if (res?.validationErrors) {
        toast.error('There was an error updating price.', {
          action: {
            label: t('close'),
            onClick: () => toast.dismiss()
          }
        })
        return
      }

      if (res?.serverError) {
        toast.error(res.serverError, {
          action: {
            label: t('close'),
            onClick: () => toast.dismiss()
          }
        })
        return
      }

      toast.success("Success ! Yurt's price updated", {
        action: {
          label: t('close'),
          onClick: () => toast.dismiss()
        }
      })
      handleToggleEdit()
    })
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
