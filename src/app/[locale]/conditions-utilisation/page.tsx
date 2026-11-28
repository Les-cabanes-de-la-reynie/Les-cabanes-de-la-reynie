import { LegalDocument } from '@/features/legal/components/LegalDocument'
import { legalMetadata } from '@/features/legal/metadata'

export async function generateMetadata() {
  return legalMetadata('terms')
}

export default function TermsOfUsePage() {
  return <LegalDocument document='terms' />
}
