'use client'

import Heading from '@/components/elements/Heading'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error])

  return (
    <div className='mx-auto mt-10 h-max border-2 border-red-700 bg-red-900 p-4'>
      <Heading level={2}>Something went wrong!</Heading>

      <Button
        variant={'destructive'}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  )
}

export default Error
