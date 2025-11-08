'use client'

import { AddressSchema } from '@/features/address/AddressSchema'
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
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { ADDRESS_FIELDS } from './_const'
import { Address } from './_types'
import { useUpdateAddress } from './hooks/useUpdateAddress'

type AddressInformationFormProps = {
  address: Address
}

export const AddressInformationForm = ({
  address
}: AddressInformationFormProps) => {
  const tCommon = useTranslations('Common')
  const { updateAddressMutation, isPending } = useUpdateAddress()

  const [isEdit, handleToggleEdit] = useToggle(false)

  const form = useForm<z.infer<typeof AddressSchema>>({
    resolver: zodResolver(AddressSchema),
    defaultValues: address,
    disabled: !isEdit
  })

  const onSubmit = (data: z.infer<typeof AddressSchema>) => {
    updateAddressMutation(data)

    handleToggleEdit()
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
        <FormField
          control={form.control}
          name={ADDRESS_FIELDS.streetAddress}
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
          name={ADDRESS_FIELDS.postalCode}
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
          name={ADDRESS_FIELDS.city}
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
          name={ADDRESS_FIELDS.country}
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
          name={ADDRESS_FIELDS.phone}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{tCommon('phone')} *</FormLabel>
              <FormControl>
                <Input
                  type='number'
                  required
                  {...field}
                  onChange={e => field.onChange(e.target.valueAsNumber)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name={ADDRESS_FIELDS.email}
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
