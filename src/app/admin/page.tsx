'use client'

import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { AdminTabs } from './components/tabs/AdminTabs'

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
