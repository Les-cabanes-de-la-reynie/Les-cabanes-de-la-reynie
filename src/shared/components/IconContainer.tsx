import { ClassNameProps } from '@/shared/_types/components'
import { cn } from '@/shared/utils/tailwind'
import { PropsWithChildren } from 'react'

type IconContainerProps = ClassNameProps &
  PropsWithChildren & {
    direction?: 'left' | 'right'
    size?: 'sm' | 'default' | 'lg' | 'xl'
  }

export const IconContainer = ({
  className,
  direction = 'right',
  size = 'default',
  children
}: IconContainerProps) => {
  const classes = cn(
    { 'ml-1': direction === 'left' && size === 'sm' },
    { 'ml-2': direction === 'left' && size === 'default' },
    { 'ml-3': direction === 'left' && size === 'lg' },
    { 'ml-4': direction === 'left' && size === 'xl' },
    { 'mr-1': direction === 'right' && size === 'sm' },
    { 'mr-2': direction === 'right' && size === 'default' },
    { 'mr-3': direction === 'right' && size === 'lg' },
    { 'mr-4': direction === 'right' && size === 'xl' },
    className
  )

  return <span className={classes}>{children}</span>
}
