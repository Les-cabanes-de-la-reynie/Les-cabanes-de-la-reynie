import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/tailwind'
import { PropsWithChildren } from 'react'

export type ContainerProps = ClassNameProps &
  PropsWithChildren & {
    padding?: boolean
    center?: boolean
  }

export const Container = ({
  padding = true,
  center = false,
  className = '',
  children
}: ContainerProps) => {
  const classes = cn(
    'relative mx-auto box-border flex w-full max-w-screen-2xl flex-1 flex-col',
    {
      'px-6 py-10 md:px-8 md:py-12': padding,
      'justify-center items-center': center
    },
    className
  )

  return <div className={classes}>{children}</div>
}
