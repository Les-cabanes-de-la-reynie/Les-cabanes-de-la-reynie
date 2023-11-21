import { Suspense } from 'react'
import Loader from '@/components/elements/Loader'
import Container from '@/components/elements/Container'
import OpeningHoursEdit from '@/components/modules/OpeningHours/Edit/OpeningHoursEdit'
import { unstable_setRequestLocale } from 'next-intl/server'
import Heading from '@/components/elements/Heading'
import UploadImage from '@/components/modules/UploadImage'

const Dashboard = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  return (
    <Container>
      <Heading level={1} className='mt-4'>
        Dashboard
      </Heading>

      <Heading level={2} className='my-8'>
        Opening hours
      </Heading>
      <Suspense fallback={<Loader />}>
        <OpeningHoursEdit />
      </Suspense>

      <UploadImage />
    </Container>
  )
}

export default Dashboard
