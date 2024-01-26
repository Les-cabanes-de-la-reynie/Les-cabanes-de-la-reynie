import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import Loader from '@/components/elements/Loader'
import AddressInformation from '@/components/modules/AddressInformation'
import OpeningHoursEdit from '@/components/modules/OpeningHours/Edit/OpeningHoursEdit'
import UploadImage from '@/components/modules/UploadImage'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { NextPage } from 'next'
import { useLocale } from 'next-intl'
import { Suspense } from 'react'

const AdminPage: NextPage = withPageAuthRequired(
  async () => {
    return (
      <Container>
        <Heading level={1} className='mb-8 mt-4 text-center'>
          Admin
        </Heading>

        <section>
          <Heading level={2} className='my-8'>
            Address information
          </Heading>
          <Suspense fallback={<Loader />}>
            <AddressInformation />
          </Suspense>
        </section>

        <section>
          <Heading level={2} className='my-8'>
            Opening hours
          </Heading>
          <Suspense fallback={<Loader />}>
            <OpeningHoursEdit />
          </Suspense>
        </section>

        <UploadImage />
      </Container>
    )
  },
  {
    returnTo: () => {
      // eslint-disable-next-line
      const lang = useLocale()
      return `${lang}/admin`
    }
  }
)
export default AdminPage
