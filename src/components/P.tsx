import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/tailwind'
import { PropsWithChildren } from 'react'

type PProps = PropsWithChildren & ClassNameProps

export const P = ({ children, className, ...rest }: PProps) => {
  const classes = cn(
    'text-base leading-7 [&:not(:first-child)]:mt-4 text-muted-foreground text-justify',
    className
  )

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  )
}
