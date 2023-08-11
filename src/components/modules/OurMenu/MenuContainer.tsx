import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { ClassNameProps } from '@/_types/components'

interface MenuContainerProps extends ClassNameProps, PropsWithChildren {}

const MenuContainer = ({ className, children }: MenuContainerProps) => {
  return (
    <div
      className={clsx(className, 'w-full lg:grid lg:grid-cols-[20rem_auto]')}
      data-test='ourMenu'
    >
      {children}
    </div>
  )
}
export default MenuContainer
