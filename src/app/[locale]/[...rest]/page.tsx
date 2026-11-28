import { notFound } from 'next/navigation'

// Always a 404: there is no shell to validate for instant navigation
export const instant = false

// Unmatched URLs never reach [locale]/not-found.tsx without this catch-all
export default function CatchAllPage() {
  notFound()
}
