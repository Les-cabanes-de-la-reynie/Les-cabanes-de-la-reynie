import { routing } from '@/i18n/routing'
import { Container } from '@/shared/components/Container'
import { Heading } from '@/shared/components/Heading'
import { Metadata } from 'next'
import { setRequestLocale } from 'next-intl/server'
import { AdminTabs } from './components/tabs/AdminTabs'

export const metadata: Metadata = {
  title: 'Admin',
  robots: {
    index: false,
    follow: true,
    nocache: true
  }
}

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }))
}

type Props = {
  params: Promise<{ locale: string }>
}

const Admin = async ({ params }: Props) => {
  const { locale } = await params
  setRequestLocale(locale)

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
