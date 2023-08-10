import { PropsWithChildren } from 'react'
import clsx from 'clsx'
import { ClassNameProps } from '@/_types/components'

interface MenuContainerProps extends ClassNameProps, PropsWithChildren {}

const MenuContainer = ({ className, children }: MenuContainerProps) => {
  return (
    <div
      className={clsx(className, 'flex flex-col-reverse lg:flex-row')}
      data-test='ourMenu'
    >
      {children}
    </div>
  )
}
export default MenuContainer
