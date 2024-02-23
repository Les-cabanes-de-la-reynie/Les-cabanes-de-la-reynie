'use client'

import { Yurt } from '@/_types/yurt'
import CancelButton from '@/components/elements/CancelButton'
import EditButton from '@/components/elements/EditButton'
import SubmitButton from '@/components/elements/SubmitButton'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useToggle from '@/hooks/useToggle'
import { YurtDataSchema } from '@/models/Yurt'
import { updateYurtPrice } from '@/services/actions/updateYurtPrice'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useMemo, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

type YurtFormProps = {
  yurt: Yurt
}

const YurtForm = ({ yurt }: YurtFormProps) => {
  const t = useTranslations('Common')

  const [isPending, startTransition] = useTransition()
  const [isEdit, handleToggleEdit] = useToggle(false)

  const editableSection = useMemo(
    () => (
      <div className='mt-4 flex justify-end gap-2'>
        {isEdit ? (
          <CancelButton onClick={handleToggleEdit} />
        ) : (
          <EditButton onClick={handleToggleEdit} />
        )}
        {isEdit && (
          <SubmitButton disabled={isPending}>{t('update')}</SubmitButton>
        )}
      </div>
    ),
    [isEdit, handleToggleEdit, isPending, t]
  )

  const form = useForm<z.infer<typeof YurtDataSchema>>({
    resolver: zodResolver(YurtDataSchema),
    defaultValues: yurt,
    disabled: !isEdit
  })

  const onSubmit = (data: z.infer<typeof YurtDataSchema>) => {
    startTransition(async () => {
      const { validationErrors, serverError } = await updateYurtPrice(data)

      if (validationErrors) {
        toast.error('There was an error updating price.', {
          action: {
            label: t('close'),
            onClick: () => toast.dismiss()
          }
        })
        return
      }

      if (serverError) {
        toast.error(serverError, {
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

        {editableSection}
      </form>
    </Form>
  )
}

export default YurtForm
