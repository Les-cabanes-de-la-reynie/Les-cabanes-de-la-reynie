'use server'

import { auth } from '@/shared/lib/auth'
import { actionClient } from '@/shared/lib/safeActions'
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
