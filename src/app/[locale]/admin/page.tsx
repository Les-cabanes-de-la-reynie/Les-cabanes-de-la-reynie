import { ourFileRouter } from '@/app/api/uploadthing/core'
import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { auth } from '@/shared/lib/auth'
import { NextSSRPlugin } from '@uploadthing/react/next-ssr-plugin'
import { Metadata } from 'next'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { extractRouterConfig } from 'uploadthing/server'
import { AdminTabs } from './components/tabs/AdminTabs'
import { CabinSection } from './components/tabs/CabinSection'
import { FindUsSection } from './components/tabs/FindUsSection'
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
      {/*
       * Only the admin uploads images. Rendered at request time (after headers()):
       * extractRouterConfig reads the clock, which a prerender rejects. It only
       * exposes the route configs, like fetching /api/uploadthing would.
       */}
      <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />

      <Heading level={1} className='mb-8 mt-4 text-center'>
        Admin
      </Heading>

      <AdminTabs
        homeContent={<HomeSection />}
        yurtContent={<YurtSection />}
        cabinContent={<CabinSection />}
        findUsContent={<FindUsSection />}
      />
    </Container>
  )
}

export default Admin
