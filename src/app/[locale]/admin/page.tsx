import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { AdminTabs } from './components/tabs/AdminTabs'
import { CabinSection } from './components/tabs/CabinSection'
import { ContactSection } from './components/tabs/ContactSection'
import { HomeSection } from './components/tabs/HomeSection'
import { YurtSection } from './components/tabs/YurtSection'

const Admin = () => {
  return (
    <Container>
      <Heading level={1} className='mb-8 mt-4 text-center'>
        Admin
      </Heading>

      <AdminTabs
        homeContent={<HomeSection />}
        yurtContent={<YurtSection />}
        cabinContent={<CabinSection />}
        contactContent={<ContactSection />}
      />
    </Container>
  )
}

export default Admin
