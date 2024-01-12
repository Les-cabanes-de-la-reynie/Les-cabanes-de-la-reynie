import { z } from 'zod'

export const AddressFormSchema = z.object({
  address: z.string(),
  postalCode: z.string(),
  city: z.string(),
  country: z.string(),
  phone: z
    .string()
    .min(10, {
      message: 'Invalid phone length.'
    })
    .max(10, {
      message: 'Invalid phone length.'
    })
})
