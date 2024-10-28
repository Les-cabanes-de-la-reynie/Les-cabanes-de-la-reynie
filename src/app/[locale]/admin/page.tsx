import { Metadata } from 'next'
import { unstable_setRequestLocale } from 'next-intl/server'
import { AdminPageWithAuth } from './AdminPageWithAuth'

export const metadata: Metadata = {
  title: 'Admin',
  robots: {
    index: false,
    follow: true,
    nocache: true
  }
}

const Admin = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  return <AdminPageWithAuth />
}

export default Admin
