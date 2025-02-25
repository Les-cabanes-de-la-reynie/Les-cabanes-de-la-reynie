'use client'

import { Button } from '@/components/ui/button'
import { ComponentProps, PropsWithChildren } from 'react'
import { useFormStatus } from 'react-dom'

type SubmitButtonProps = ComponentProps<'button'> & PropsWithChildren

export const SubmitButton = ({ children, ...props }: SubmitButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button type='submit' disabled={pending} {...props}>
      {children}
    </Button>
  )
}
