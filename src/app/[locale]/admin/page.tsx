import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { auth } from '@/shared/lib/auth'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { AdminTabs } from './components/tabs/AdminTabs'
import { CabinSection } from './components/tabs/CabinSection'
import { ContactSection } from './components/tabs/ContactSection'
import { HomeSection } from './components/tabs/HomeSection'
import { YurtSection } from './components/tabs/YurtSection'

export const metadata: Metadata = {
  robots: { index: false, follow: false }
}

const Admin = async () => {
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session) {
    redirect(PAGE_ROUTES.admin.signIn)
  }

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
