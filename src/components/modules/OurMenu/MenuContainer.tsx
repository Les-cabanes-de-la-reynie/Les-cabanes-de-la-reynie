import { PropsWithChildren } from 'react'
import { cn } from '@/utils/cn'
import { ClassNameProps } from '@/_types/components'

interface MenuContainerProps extends ClassNameProps, PropsWithChildren {}

const MenuContainer = ({ className, children }: MenuContainerProps) => {
  return (
    <div
      className={cn('w-full lg:grid lg:grid-cols-[20rem_auto]', className)}
      data-test='ourMenu'
    >
      {children}
    </div>
  )
}
export default MenuContainer
