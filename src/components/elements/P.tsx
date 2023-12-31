import { PropsWithChildren } from 'react'
import { ClassNameProps } from '@/_types/components'
import { cn } from '@/lib/utils'

type PProps = PropsWithChildren & ClassNameProps

const P = ({ children, className, ...rest }: PProps) => {
  const classes = cn(
    'text-base leading-7 [&:not(:first-child)]:mt-6',
    className
  )

  return (
    <p className={classes} {...rest}>
      {children}
    </p>
  )
}
export default P
