import Container from '@/components/elements/Container'
import Heading from '@/components/elements/Heading'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { NextPage } from 'next'
import AdminTabs from './AdminTabs'

const AdminPage: NextPage = withPageAuthRequired(
  async () => {
    return (
      <Container>
        <Heading level={1} className='mb-8 mt-4 text-center'>
          Admin
        </Heading>

        <AdminTabs />
      </Container>
    )
  },
  {
    returnTo: () => {
      return 'fr/admin'
    }
  }
)
export default AdminPage
