import { createSafeActionClient } from 'next-safe-action'
import { getAccessToken } from '@auth0/nextjs-auth0'

export class ActionError extends Error {}

export const authenticatedAction = createSafeActionClient({
  handleReturnedServerError(error) {
    if (error instanceof ActionError) {
      return {
        serverError: error.message
      }
    }
    return {
      serverError: 'Something went wrong ! Maybe forgot to be logged ?'
    }
  },
  async middleware() {
    const accessToken = await getAccessToken()

    if (!accessToken) {
      throw new ActionError('You need to be logged to do this')
    }
  }
})
