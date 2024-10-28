import { cva, type VariantProps } from 'class-variance-authority'

import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/tailwind'
import { PropsWithChildren } from 'react'

const iconContainerVariants = cva('', {
  variants: {
    size: {
      default: 'm-2',
      sm: 'm-1',
      lg: 'm-3',
      xl: 'm-4',
      none: 'm-0'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

type IconContainerProps = VariantProps<typeof iconContainerVariants> &
  PropsWithChildren &
  ClassNameProps

const IconContainer = ({ className, size, children }: IconContainerProps) => {
  return (
    <span className={cn(iconContainerVariants({ size, className }), 'px-1')}>
      {children}
    </span>
  )
}
IconContainer.displayName = 'IconContainer'

export { IconContainer, iconContainerVariants }
