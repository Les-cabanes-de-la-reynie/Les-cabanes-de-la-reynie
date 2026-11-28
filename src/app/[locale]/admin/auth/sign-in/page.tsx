import { Metadata } from 'next'
import { SignInForm } from './SignInForm'

// Linked from every footer: keep it out of search results
export const metadata: Metadata = {
  robots: { index: false, follow: false }
}

export default async function SignInPage() {
  return <SignInForm />
}
