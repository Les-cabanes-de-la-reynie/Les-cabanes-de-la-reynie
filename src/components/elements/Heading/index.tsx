import { HTMLProps, PropsWithChildren } from 'react'
import { cn } from '@/utils/cn'

export interface HeadingProps
  extends PropsWithChildren,
    HTMLProps<HTMLHeadingElement> {
  level: number
  error?: boolean
}

const Heading = ({
  children,
  level,
  error = false,
  className = '',
  ...rest
}: HeadingProps) => {
  const h1ClassName = cn(
    'text-white text-4xl font-bold md:text-5xl',
    {
      'text-error': error
    },
    className
  )
  const h2ClassName = cn(
    'text-white text-3xl font-bold md:text-4xl',
    {
      'text-error': error
    },
    className
  )
  const h3ClassName = cn(
    'text-white text-xl font-bold md:text-2xl',
    {
      'text-error': error
    },
    className
  )
  const h4ClassName = cn(
    'text-white text-lg font-bold md:text-xl',
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
export default Heading
