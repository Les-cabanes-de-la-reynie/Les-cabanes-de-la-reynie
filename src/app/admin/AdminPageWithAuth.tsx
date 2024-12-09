import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { NextPage } from 'next'
import { AdminTabs } from './components/tabs/AdminTabs'

export const AdminPageWithAuth: NextPage = withPageAuthRequired(
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
      return 'admin'
    }
  }
)
