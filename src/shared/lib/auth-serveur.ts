import { headers } from 'next/headers'
import { auth } from './auth'

export const getSession = async () => {
  return await auth.api.getSession({
    headers: await headers()
  })
}

export const getUser = async () => {
  const session = await getSession()

  if (!session || !session.user || !session.user.email) return null

  return session?.user
}
