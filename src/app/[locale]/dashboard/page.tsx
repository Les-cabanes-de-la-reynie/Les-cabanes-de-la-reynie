'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import Loader from '@/components/elements/Loader'
import Container from '@/components/elements/Container'
import OpeningHoursEdit from '@/components/modules/OpeningHours/Edit/OpeningHoursEdit'

const Dashboard = () => {
  const { user } = useUser()

  return (
    <Container>
      <p>{user?.name ?? 'PAS CONNECTE'}</p>
      <Link href='/api/auth/logout'>LOGOUT</Link>
      <div>DASHBOARD</div>
      <Suspense fallback={<Loader />}>
        <OpeningHoursEdit />
      </Suspense>
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
