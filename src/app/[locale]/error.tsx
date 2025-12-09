'use client'

import { Heading } from '@/shared/components/Heading'
import {
  Alert,
  AlertDescription,
  AlertTitle
} from '@/shared/components/ui/alert'
import { Button } from '@/shared/components/ui/button'
import { AlertCircleIcon } from 'lucide-react'
import { useEffect } from 'react'

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error])

  return (
    <div className='mx-auto mt-10'>
      <Alert variant='destructive'>
        <AlertCircleIcon />
        <AlertTitle>
          <Heading level={2}>Something went wrong!</Heading>
        </AlertTitle>
        <AlertDescription>
          <Button
            variant={'destructive'}
            onClick={
              // Attempt to recover by trying to re-render the segment
              () => reset()
            }
          >
            Try again
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default Error
