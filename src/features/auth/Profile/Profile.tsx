import { PAGE_ROUTES } from '@/shared/_constants/page'
import { authClient } from '@/shared/lib/auth-client'
import { useRouter } from 'next/navigation'
import { ProfileContent } from './ProfileContent'

export const Profile = () => {
  const session = authClient.useSession()
  const router = useRouter()

  if (!session.data?.user || session.isPending) return null

  const handleLogOut = async () => {
    await authClient.signOut()
    router.push(PAGE_ROUTES.home)
  }

  return <ProfileContent user={session.data?.user} onLogout={handleLogOut} />
}
