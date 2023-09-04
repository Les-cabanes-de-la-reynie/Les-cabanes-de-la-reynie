import { PropsWithChildren } from 'react'
import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/cn'

interface NavItemProps extends PropsWithChildren, ClassNameProps {}

const NavItem = ({ children, className }: NavItemProps) => {
  const classes = cn('py-4', className)

  return <li className={classes}>{children}</li>
}
export default NavItem
