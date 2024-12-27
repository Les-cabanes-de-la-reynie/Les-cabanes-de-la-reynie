import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/tailwind'
import { PropsWithChildren } from 'react'

type TextWithSkewBackgroundColorProps = ClassNameProps & PropsWithChildren

export const TextWithSkewBackgroundColor = ({
  children,
  className
}: TextWithSkewBackgroundColorProps) => {
  return (
    <span
      className={cn(
        'before:block before:absolute before:inset-0 before:-skew-y-1 before:bg-primary relative inline-block text-pretty mr-1 px-2',
        className
      )}
    >
      <span className='relative text-primary-foreground font-medium'>
        {children}
      </span>
    </span>
  )
}
