'use client'

import { Heading } from '@/shared/components/Heading'
import {
  Alert,
  AlertDescription,
  AlertTitle
} from '@/shared/components/ui/alert'
import { Button } from '@/shared/components/ui/button'
import { AlertCircleIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect } from 'react'

const Error = ({
  error,
  unstable_retry
}: {
  error: Error & { digest?: string }
  reset: () => void
  unstable_retry: () => void
}) => {
  const t = useTranslations('Errors')

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className='mx-auto mt-10'>
      <Alert variant='destructive'>
        <AlertCircleIcon />
        <AlertTitle>
          <Heading level={2}>{t('genericTitle')}</Heading>
        </AlertTitle>
        <AlertDescription>
          <Button variant='destructive' onClick={() => unstable_retry()}>
            {t('retryButton')}
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  )
}

export default Error
