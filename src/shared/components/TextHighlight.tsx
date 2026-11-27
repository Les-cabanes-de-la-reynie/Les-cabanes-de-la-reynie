import { ClassNameProps } from '@/shared/_types/components'
import { cn } from '@/shared/utils/tailwind'
import { PropsWithChildren } from 'react'

type TextHighlightProps = ClassNameProps & PropsWithChildren

export const TextHighlight = ({ children, className }: TextHighlightProps) => {
  return (
    <span
      className={cn(
        'mr-1 rounded-[0.4em] bg-ink/18 box-decoration-clone px-[0.45em] py-[0.1em] font-semibold text-foreground',
        className
      )}
    >
      {children}
    </span>
  )
}
