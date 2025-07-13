'use client'

import { updateYurtPrice } from '@/features/yurt/infrastructure/actions/updateYurtPrice'
import { YurtSchema } from '@/features/yurt/YurtSchema'
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
import * as z from 'zod'
import { Yurt } from './types'

type YurtFormProps = {
  yurt: Yurt
}

export const YurtForm = ({ yurt }: YurtFormProps) => {
  const t = useTranslations('Common')

  const [isPending, startTransition] = useTransition()
  const [isEdit, handleToggleEdit] = useToggle(false)

  const form = useForm<z.infer<typeof YurtSchema>>({
    resolver: zodResolver(YurtSchema),
    defaultValues: yurt,
    disabled: !isEdit
  })

  const onSubmit = (data: z.infer<typeof YurtSchema>) => {
    startTransition(async () => {
      const res = await updateYurtPrice(data)

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
          name='price'
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
