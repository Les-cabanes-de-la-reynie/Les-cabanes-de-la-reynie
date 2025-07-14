import { z } from 'zod'
import { SignInSchema } from './SignInSchema'

export type SignInCredentials = z.infer<typeof SignInSchema>
