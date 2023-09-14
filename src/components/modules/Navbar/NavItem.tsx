import { PropsWithChildren } from 'react'
import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/cn'

interface NavItemProps extends PropsWithChildren, ClassNameProps {}

const NavItem = ({ children, className }: NavItemProps) => {
  const classes = cn(
    'py-4 text-primary-black dark:text-white lg:p-0',
    className
  )

  return <li className={classes}>{children}</li>
}
export default NavItem
