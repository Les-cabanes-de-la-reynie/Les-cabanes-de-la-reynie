import { authClient } from '@/shared/lib/auth-client'
import { ProfileContent } from './ProfileContent'

export const Profile = () => {
  const user = authClient.useSession()?.data?.user

  if (!user) return null

  return <ProfileContent user={user} />
}
