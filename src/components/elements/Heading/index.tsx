import { HTMLProps, PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import { Kaushan_Script } from 'next/font/google'

const fontFamily = Kaushan_Script({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-kaushan-script'
})

export type HeadingProps = PropsWithChildren &
  HTMLProps<HTMLHeadingElement> & {
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
    'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
    {
      'text-error': error
    },
    className
  )
  const h2ClassName = cn(
    fontFamily.variable,
    'scroll-m-20 text-3xl font-title tracking-tight first:mt-0',
    {
      'text-error': error
    },
    className
  )
  const h3ClassName = cn(
    'scroll-m-20 text-2xl font-semibold tracking-tight',
    {
      'text-error': error
    },
    className
  )
  const h4ClassName = cn(
    'scroll-m-20 text-xl font-semibold tracking-tight',
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
