import { createSafeActionClient } from 'next-safe-action'
import { getSession } from '@auth0/nextjs-auth0'

export class ActionError extends Error {}

export const authenticatedAction = createSafeActionClient({
  handleReturnedServerError(error) {
    if (error instanceof ActionError) {
      return error.message
    }
    return 'Something went wrong ! Maybe forgot to be logged ?'
  },
  async middleware() {
    // This code runs on your server before action
    const user = await getSession()

    const userEmail = user?.user?.email
    const isEmailVerified = user?.user.email_verified

    // If you throw, the user will not be able to upload
    if (!userEmail || !isEmailVerified)
      throw new ActionError('You need to be logged to do this')
  }
})
