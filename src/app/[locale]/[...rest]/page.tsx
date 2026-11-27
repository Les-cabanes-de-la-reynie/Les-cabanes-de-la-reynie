import { notFound } from 'next/navigation'

// Unmatched URLs never reach [locale]/not-found.tsx without this catch-all
export default function CatchAllPage() {
  notFound()
}
