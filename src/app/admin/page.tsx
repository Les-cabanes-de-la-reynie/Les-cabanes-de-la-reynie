import { Metadata } from 'next'
import { AdminPageWithAuth } from './AdminPageWithAuth'

export const metadata: Metadata = {
  title: 'Admin',
  robots: {
    index: false,
    follow: true,
    nocache: true
  }
}

const Admin = () => {
  return <AdminPageWithAuth />
}

export default Admin
