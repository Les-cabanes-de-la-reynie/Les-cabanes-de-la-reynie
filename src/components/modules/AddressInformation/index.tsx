'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import useToggle from '@/hooks/useToggle'
import { useMemo } from 'react'
import CancelButton from '@/components/elements/CancelButton'
import EditButton from '@/components/elements/EditButton'
import SubmitButton from '@/components/elements/SubmitButton'
import P from '@/components/elements/P'
import { AddressFormSchema } from '@/models/Address'

const AddressInformation = () => {
  const [isEdit, handleToggleEdit] = useToggle(false)

  const editableSection = useMemo(
    () => (
      <div className='mt-4 flex justify-end gap-2'>
        {isEdit ? (
          <CancelButton onClick={handleToggleEdit} />
        ) : (
          <EditButton onClick={handleToggleEdit} />
        )}
        {isEdit && <SubmitButton>Mettre à jour</SubmitButton>}
      </div>
    ),
    [isEdit, handleToggleEdit]
  )

  const form = useForm<z.infer<typeof AddressFormSchema>>({
    resolver: zodResolver(AddressFormSchema),
    defaultValues: {
      address: '',
      postalCode: '',
      city: '',
      country: '',
      phone: ''
    },
    disabled: !isEdit
  })

  // const onSubmit = (data: z.infer<typeof AddressFormSchema>) => {}

  return (
    <>
      <P className='mb-5'>
        Les informations ici vont servir à mettre à jour la popover de la map
        sur la page Contact
      </P>

      <Form {...form}>
        {/* <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'> */}
        <form className='space-y-6'>
          <FormField
            control={form.control}
            name='address'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input placeholder={`4 rue de l'église`} {...field} />
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
                <FormLabel>Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder='11200' {...field} />
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
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder='Paris' {...field} />
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
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder='France' {...field} />
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
                <FormLabel>Phone (obligatoire)</FormLabel>
                <FormControl>
                  <Input placeholder='0650403020' {...field} />
                </FormControl>
                <FormDescription>
                  Il faut écrire le numéro de cette manière : 0650403020
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {editableSection}
        </form>
      </Form>
    </>
  )
}

export default AddressInformation
