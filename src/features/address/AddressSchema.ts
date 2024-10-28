import validator from 'validator'
import { z } from 'zod'

export const AddressSchema = z.object({
  streetAddress: z.string(),
  postalCode: z.string().length(5, { message: 'Code postal invalide' }),
  city: z.string(),
  country: z.string(),
  phone: z
    .string()
    .length(10, { message: 'Longueur de numéro de téléphone invalide' })
    .refine(validator.isMobilePhone, {
      message: 'Numéro de téléphone invalide'
    }),
  email: z.string().refine(validator.isEmail, {
    message: 'Email invalide'
  })
})
