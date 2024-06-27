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
import EditableButtons from '../../elements/EditableButtons'

type AddressInformationFormProps = {
  address: Address
}

const AddressInformationForm = ({ address }: AddressInformationFormProps) => {
  const tCommon = useTranslations('Common')

  const [isPending, startTransition] = useTransition()
  const [isEdit, handleToggleEdit] = useToggle(false)

  const form = useForm<z.infer<typeof AddressFormSchema>>({
    resolver: zodResolver(AddressFormSchema),
    defaultValues: address,
    disabled: !isEdit
  })

  const onSubmit = (data: z.infer<typeof AddressFormSchema>) => {
    startTransition(async () => {
      const res = await updateAddressInformation(data)

      if (res?.validationErrors) {
        toast.error('There was an error updating address.', {
          action: {
            label: tCommon('close'),
            onClick: () => toast.dismiss()
          }
        })
        return
      }

      if (res?.serverError) {
        toast.error(res.serverError, {
          action: {
            label: tCommon('close'),
            onClick: () => toast.dismiss()
          }
        })
        return
      }

      toast.success('Success ! Address information updated', {
        action: {
          label: tCommon('close'),
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
              <FormLabel>{tCommon('address')}</FormLabel>
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
              <FormLabel>{tCommon('postalCode')} *</FormLabel>
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
              <FormLabel>{tCommon('city')} *</FormLabel>
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
              <FormLabel>{tCommon('country')} *</FormLabel>
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
              <FormLabel>{tCommon('phone')} *</FormLabel>
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
              <FormLabel>{tCommon('email')} *</FormLabel>
              <FormControl>
                <Input type='email' required {...field} />
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

export default AddressInformationForm
