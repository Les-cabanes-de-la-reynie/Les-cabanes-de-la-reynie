'use client'

import { Hut } from '@/_types/hut'
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
import { HutDataSchema } from '@/models/Hut'
import { updateHutPrice } from '@/services/actions/updateHutPrice'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import EditableButtons from '../../elements/EditableButtons'

type hutFormProps = {
  hut: Hut
}

const HutForm = ({ hut }: hutFormProps) => {
  const t = useTranslations('Common')

  const [isPending, startTransition] = useTransition()
  const [isEdit, handleToggleEdit] = useToggle(false)

  const form = useForm<z.infer<typeof HutDataSchema>>({
    resolver: zodResolver(HutDataSchema),
    defaultValues: hut,
    disabled: !isEdit
  })

  const onSubmit = (data: z.infer<typeof HutDataSchema>) => {
    startTransition(async () => {
      const res = await updateHutPrice(data)

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

      toast.success("Success ! Hut's price updated", {
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

export default HutForm
