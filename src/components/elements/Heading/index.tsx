import { HTMLProps, PropsWithChildren } from 'react'
import clsx from 'clsx'

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
  const h1ClassName = clsx(className, 'text-4xl font-bold md:text-5xl', {
    'text-error': error,
    'text-white': !error
  })
  const h2ClassName = clsx(className, 'text-3xl font-bold my-6 md:text-4xl', {
    'text-error': error,
    'text-white': !error
  })
  const h3ClassName = clsx(className, 'text-xl font-bold md:text-2xl', {
    'text-error': error,
    'text-white': !error
  })
  const h4ClassName = clsx(className, 'text-lg font-bold md:text-xl', {
    'text-error': error,
    'text-white': !error
  })

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
