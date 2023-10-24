import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import { ClassNameProps } from '_types/components'
import { cn } from 'utils/cn'

interface NavItemProps
  extends PropsWithChildren,
    ClassNameProps,
    ComponentPropsWithoutRef<'li'> {}

const NavItem = ({ children, className, ...rest }: NavItemProps) => {
  const classes = cn(
    'py-4 text-white hover:text-zinc-300 transition-colors select-none lg:p-0',
    className
  )

  return (
    <li className={classes} {...rest}>
      {children}
    </li>
  )
}
export default NavItem
