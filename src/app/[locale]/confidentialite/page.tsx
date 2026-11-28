import { LegalDocument } from '@/features/legal/components/LegalDocument'
import { legalMetadata } from '@/features/legal/metadata'

export async function generateMetadata() {
  return legalMetadata('privacy')
}

export default function PrivacyPolicyPage() {
  return <LegalDocument document='privacy' />
}
