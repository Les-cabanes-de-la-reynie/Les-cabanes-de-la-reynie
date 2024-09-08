import { getSession } from '@auth0/nextjs-auth0'
import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE
} from 'next-safe-action'

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
  const user = await getSession()

  const userEmail = user?.user?.email
  const isEmailVerified = user?.user.email_verified

  // If you throw an error, the user will not be able to upload pictures
  if (!userEmail || !isEmailVerified) {
    throw new Error('You need to be logged to do this')
  }

  return next({ ctx: { userEmail } })
})
