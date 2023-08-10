import { ClassNameProps } from '@/_types/components'
import clsx from 'clsx'
import { PropsWithChildren } from 'react'

interface CardProps extends ClassNameProps, PropsWithChildren {}

const Card = ({ className, children }: CardProps) => {
  return (
    <li
      className={clsx(
        className,
        'relative flex h-72 w-full flex-col rounded border border-border bg-stone-950 text-white shadow-lg transition '
      )}
    >
      {children}
    </li>
  )
}
export default Card
