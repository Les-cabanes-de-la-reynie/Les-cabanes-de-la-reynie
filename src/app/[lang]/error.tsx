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
  }, [error])

  return (
    <div className='mx-auto mt-10 h-max border-2 border-red-700 bg-red-900 p-4'>
      <Heading level={2}>Something went wrong!</Heading>

      <button
        className='mt-4 rounded bg-red-600 px-4 py-2 text-white transition-colors hover:bg-opacity-50'
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
