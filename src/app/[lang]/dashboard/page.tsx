'use client'

import Link from 'next/link'
import Loader from '@/components/elements/Loader'
import EditOpeningHours from '@/components/modules/OpeningHours/Edit/EditOpeningHours'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import Container from '@/components/elements/Container'

const Dashboard = () => {
  const { user, error, isLoading } = useUser()

  return (
    <Container>
      <p>{user?.name ?? 'PAS CONNECTE'}</p>
      <Link href='/api/auth/logout'>LOGOUT</Link>
      <div>DASHBOARD</div>
      <EditOpeningHours />
    </Container>
  )
}

export default withPageAuthRequired(Dashboard, {
  onRedirecting: () => (
    <div>
      <Loader />
    </div>
  ),
  onError: error => (
    <div>
      <p>{error.message}</p>
    </div>
  )
})
