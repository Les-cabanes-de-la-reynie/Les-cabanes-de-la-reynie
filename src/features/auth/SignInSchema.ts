import validator from 'validator'
import { z } from 'zod'

export const SignInSchema = z.object({
  email: z.string().refine(validator.isEmail, {
    message: 'Email invalide'
  }),
  password: z.string().min(6, {
    message: 'Le mot de passe doit contenir au moins 6 caractères.'
  })
})
