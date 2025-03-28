import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE
} from 'next-safe-action'
import { authClient } from './auth-client'

export class ActionError extends Error {}

// Base client
export const actionClient = createSafeActionClient({
  handleServerError: e => {
    // If the error is an instance of `ActionError`, unmask the message.
    if (e instanceof ActionError) {
      return e.message
    }

    // Otherwise return default error message.
    return DEFAULT_SERVER_ERROR_MESSAGE
  }
})

// Auth client
export const authActionClient = actionClient.use(async ({ next }) => {
  // This code runs on your server before action
  const { data } = authClient.useSession()

  // If you throw an error, the user will not be able to upload pictures
  if (!data || !data.user || !data.user.email) {
    throw new Error('You need to be logged to do this')
  }

  return next({ ctx: { userEmail: data.user.email } })
})
