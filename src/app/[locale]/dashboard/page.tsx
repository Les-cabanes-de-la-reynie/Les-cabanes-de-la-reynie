import { Suspense } from 'react'
import Loader from '@/components/elements/Loader'
import Container from '@/components/elements/Container'
import OpeningHoursEdit from '@/components/modules/OpeningHours/Edit/OpeningHoursEdit'
import { unstable_setRequestLocale } from 'next-intl/server'

const Dashboard = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  return (
    <Container>
      <div>DASHBOARD</div>
      <Suspense fallback={<Loader />}>
        <OpeningHoursEdit />
      </Suspense>
    </Container>
  )
}

export default Dashboard
