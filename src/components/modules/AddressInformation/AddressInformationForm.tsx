'use client'

import { Address } from '@/_types/address'
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
import { AddressFormSchema } from '@/models/Address'
import { updateAddressInformation } from '@/services/actions/updateAddressInformation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useMemo, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

type AddressInformationFormProps = {
  address: Address
}

const AddressInformationForm = ({ address }: AddressInformationFormProps) => {
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
          <SubmitButton disabled={isPending}>Mettre à jour</SubmitButton>
        )}
      </div>
    ),
    [isEdit, handleToggleEdit, isPending]
  )

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
          name='address'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address (non obligatoire)</FormLabel>
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
              <FormLabel>Postal Code *</FormLabel>
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
              <FormLabel>City *</FormLabel>
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
              <FormLabel>Country *</FormLabel>
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
              <FormLabel>Phone *</FormLabel>
              <FormControl>
                <Input type='number' required {...field} />
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

export default AddressInformationForm
