import { unstable_setRequestLocale } from 'next-intl/server'
import AdminPage from './AdminPage'

const Admin = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale)

  return <AdminPage />
}

export default Admin
