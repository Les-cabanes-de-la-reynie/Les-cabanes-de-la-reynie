import { ClassNameProps } from '@/shared/_types/components'
import { cn } from '@/shared/utils/tailwind'
import { PropsWithChildren } from 'react'

type PProps = PropsWithChildren & ClassNameProps

export const P = ({ children, className, ...rest }: PProps) => {
  const classes = cn(
    'text-base leading-7 not-first:mt-4 text-foreground/90 text-pretty',
    className
  )

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  )
}
