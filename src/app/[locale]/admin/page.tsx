import { Metadata } from 'next'
import { unstable_setRequestLocale } from 'next-intl/server'
import AdminPage from './AdminPage'

export const metadata: Metadata = {
  title: 'Admin'
}

const Admin = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  return <AdminPage />
}

export default Admin
