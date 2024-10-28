'use client'

import { Button, ButtonProps } from '@/components/ui/button'
import { PropsWithChildren } from 'react'
import { useFormStatus } from 'react-dom'

type SubmitButtonProps = ButtonProps & PropsWithChildren

export const SubmitButton = ({ children, ...props }: SubmitButtonProps) => {
  const { pending } = useFormStatus()

  return (
    <Button type='submit' disabled={pending} {...props}>
      {children}
    </Button>
  )
}
