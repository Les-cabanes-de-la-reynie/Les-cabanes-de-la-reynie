import { PropsWithChildren } from 'react'
import { cn } from '@/utils/cn'
import { ClassNameProps } from '@/_types/components'

interface CardProps extends ClassNameProps, PropsWithChildren {}

const Card = ({ className, children }: CardProps) => {
  return (
    <li
      className={cn(
        'relative flex w-full flex-col rounded border border-border bg-stone-950 text-white shadow-lg shadow-stone-950',
        className
      )}
    >
      {children}
    </li>
  )
}
export default Card
