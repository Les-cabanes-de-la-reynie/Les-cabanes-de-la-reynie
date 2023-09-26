'use client'

import Link from 'next/link'
import Loader from '@/components/elements/Loader'
import OpeningHours from '@/components/modules/OpeningHours'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import Container from '@/components/elements/Container'

const Dashboard = () => {
  const { user, error, isLoading } = useUser()

  return (
    <Container>
      <p>{user?.name ?? 'PAS CONNECTE'}</p>
      <Link href='/api/auth/logout'>LOGOUT</Link>
      <div>DASHBOARD</div>
      <OpeningHours isEditable={true} />
    </Container>
  )
}

export default withPageAuthRequired(Dashboard, {
  onRedirecting: () => (
    <Container>
      <Loader />
    </Container>
  ),
  onError: error => (
    <div>
      <p>{error.message}</p>
    </div>
  )
})
