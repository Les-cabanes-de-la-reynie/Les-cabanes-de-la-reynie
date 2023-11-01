'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client'
import Loader from '@/components/elements/Loader'
import Container from '@/components/elements/Container'
import OpeningHoursEdit from '@/components/modules/OpeningHours/Edit/OpeningHoursEdit'
import P from '@/components/elements/P'

const Dashboard = () => {
  const { user } = useUser()

  return (
    <Container>
      <P>{user?.name ?? 'PAS CONNECTE'}</P>
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
      <P>{error.message}</P>
    </div>
  )
})
