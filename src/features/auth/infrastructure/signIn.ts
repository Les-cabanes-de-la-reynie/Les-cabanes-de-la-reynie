import { API_ROUTES } from '@/shared/_constants/api'
import { env } from '@/shared/lib/env'
import { SignInCredentials } from '../_types'

export const signIn = async (credentials: SignInCredentials) => {
  try {
    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}${API_ROUTES.signIn}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      throw new Error(errorData.error || 'Authentication failed')
    }

    return response.json()
  } catch (error) {
    throw new Error(`Failed to sign in. ${error}`)
  }
}
