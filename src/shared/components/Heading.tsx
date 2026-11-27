import { cn } from '@/shared/utils/tailwind'
import { HTMLProps, PropsWithChildren } from 'react'

export type HeadingProps = PropsWithChildren &
  HTMLProps<HTMLHeadingElement> & {
    level: number
    error?: boolean
  }

export const Heading = ({
  children,
  level,
  error = false,
  className = '',
  ...rest
}: HeadingProps) => {
  const h1ClassName = cn(
    'scroll-m-20 text-h1 text-balance font-[650]',
    {
      'text-error': error
    },
    className
  )
  const h2ClassName = cn(
    'scroll-m-20 text-h2 text-balance font-[650] first:mt-0',
    {
      'text-error': error
    },
    className
  )
  const h3ClassName = cn(
    'scroll-m-20 text-2xl text-balance font-semibold tracking-[-0.01em]',
    {
      'text-error': error
    },
    className
  )
  const h4ClassName = cn(
    'scroll-m-20 text-xl text-balance font-semibold tracking-[-0.01em]',
    {
      'text-error': error
    },
    className
  )

  switch (level) {
    case 1:
      return (
        <h1 className={h1ClassName} {...rest}>
          {children}
        </h1>
      )
    case 2:
      return (
        <h2 className={h2ClassName} {...rest}>
          {children}
        </h2>
      )
    case 3:
      return (
        <h3 className={h3ClassName} {...rest}>
          {children}
        </h3>
      )
    case 4:
    default:
      return (
        <h4 className={h4ClassName} {...rest}>
          {children}
        </h4>
      )
  }
}
