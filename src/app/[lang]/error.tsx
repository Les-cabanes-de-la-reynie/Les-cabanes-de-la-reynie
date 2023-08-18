'use client'

import Heading from '@/components/elements/Heading'
import { useEffect } from 'react'

export default function Error({
  error,
  reset
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div>
      <Heading level={1}>Something went wrong!</Heading>

      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
