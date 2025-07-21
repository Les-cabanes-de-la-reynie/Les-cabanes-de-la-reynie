import { ClassNameProps } from '@/shared/_types/components'
import { cn } from '@/shared/utils/tailwind'
import { PropsWithChildren } from 'react'

type FooterItemProps = PropsWithChildren &
  ClassNameProps & {
    itemProp?: string
  }

export const FooterItem = ({
  children,
  itemProp,
  className
}: FooterItemProps) => {
  return (
    <li
      className={cn(
        'mb-3 max-w-max text-sm hover:underline md:max-w-none',
        className
      )}
      itemProp={itemProp}
    >
      {children}
    </li>
  )
}
