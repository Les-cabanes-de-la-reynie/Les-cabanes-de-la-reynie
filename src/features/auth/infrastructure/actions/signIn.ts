'use server'

import { auth } from '@/lib/auth'
import { actionClient } from '@/lib/safeActions'
import { SignInSchema } from '../../SignInSchema'

export const postSignIn = actionClient
  .schema(SignInSchema)
  .action(async ({ parsedInput: signInData }) => {
    await auth.api.signInEmail({
      body: {
        email: signInData.email,
        password: signInData.password
      }
    })
  })
