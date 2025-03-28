import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { ProfileContent } from './ProfileContent'

export const Profile = () => {
  const session = authClient.useSession()
  const router = useRouter()

  if (!session.data?.user || session.isPending) return null

  const handleLogOut = async () => {
    await authClient.signOut()
    router.push('/')
  }

  return <ProfileContent user={session.data?.user} onLogout={handleLogOut} />
}
