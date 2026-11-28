import { LegalDocument } from '@/features/legal/components/LegalDocument'
import { legalMetadata } from '@/features/legal/metadata'

export async function generateMetadata() {
  return legalMetadata('notice')
}

export default function LegalNoticePage() {
  return <LegalDocument document='notice' />
}
