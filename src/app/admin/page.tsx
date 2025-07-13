import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { Metadata } from 'next'
import { AdminTabs } from './components/tabs/AdminTabs'

export const metadata: Metadata = {
  title: 'Admin',
  robots: {
    index: false,
    follow: true,
    nocache: true
  }
}

const Admin = () => {
  return (
    <Container>
      <Heading level={1} className='mb-8 mt-4 text-center'>
        Admin
      </Heading>

      <AdminTabs />
    </Container>
  )
}

export default Admin
