import { ClassNameProps } from '@/_types/components'
import { cn } from '@/lib/utils'
import { PropsWithChildren } from 'react'

export type ContainerProps = ClassNameProps &
  PropsWithChildren & {
    padding?: boolean
    center?: boolean
  }

const Container = ({
  padding = true,
  center = false,
  className = '',
  children
}: ContainerProps) => {
  const classes = cn(
    'relative mx-auto box-border flex w-full max-w-7xl flex-1 flex-col',
    {
      'p-4 md:p-6': padding,
      'justify-center items-center': center
    },
    className
  )

  return <div className={classes}>{children}</div>
}
export default Container
