import {
  createSafeActionClient,
  DEFAULT_SERVER_ERROR_MESSAGE
} from 'next-safe-action'
import { headers } from 'next/headers'
import { auth } from './auth'

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
  const session = await auth.api.getSession({
    headers: await headers()
  })

  if (!session?.user?.email) {
    throw new ActionError('You need to be logged in to do this')
  }

  return next({ ctx: { userEmail: session.user.email } })
})
