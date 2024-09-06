import { Metadata } from 'next'
import { unstable_setRequestLocale } from 'next-intl/server'
import AdminPage from './components/AdminPage'

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

  return <AdminPage />
}

export default Admin
