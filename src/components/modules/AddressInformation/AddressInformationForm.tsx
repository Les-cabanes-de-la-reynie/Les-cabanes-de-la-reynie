'use client'

import { Address } from '@/_types/address'
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
import { AddressFormSchema } from '@/models/Address'
import { updateAddressInformation } from '@/services/actions/updateAddressInformation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'
import EditableButtons from '../EditableButtons'

type AddressInformationFormProps = {
  address: Address
}

const AddressInformationForm = ({ address }: AddressInformationFormProps) => {
  const t = useTranslations('Common')
  const t2 = useTranslations('Admin')

  const [isPending, startTransition] = useTransition()
  const [isEdit, handleToggleEdit] = useToggle(false)

  const form = useForm<z.infer<typeof AddressFormSchema>>({
    resolver: zodResolver(AddressFormSchema),
    defaultValues: address,
    disabled: !isEdit
  })

  const onSubmit = (data: z.infer<typeof AddressFormSchema>) => {
    startTransition(async () => {
      const { validationErrors, serverError } =
        await updateAddressInformation(data)

      if (validationErrors) {
        toast.error('There was an error updating address.', {
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

      toast.success('Success ! Address information updated', {
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
          name='streetAddress'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t2('address')}</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='postalCode'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t2('postalCode')} *</FormLabel>
              <FormControl>
                <Input required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='city'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t2('city')} *</FormLabel>
              <FormControl>
                <Input required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='country'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t2('country')} *</FormLabel>
              <FormControl>
                <Input required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t2('phone')} *</FormLabel>
              <FormControl>
                <Input type='number' required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t2('email')} *</FormLabel>
              <FormControl>
                <Input type='email' required {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <EditableButtons
          isEdit={isEdit}
          handleToggleEdit={handleToggleEdit}
          isPending={isPending}
        />
      </form>
    </Form>
  )
}

export default AddressInformationForm
