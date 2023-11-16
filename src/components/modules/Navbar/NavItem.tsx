import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'
import { ClassNameProps } from '@/_types/components'
import { cn } from '@/lib/utils'

type NavItemProps = PropsWithChildren &
  ClassNameProps &
  ComponentPropsWithoutRef<'li'>

const NavItem = ({ children, className, ...rest }: NavItemProps) => {
  const classes = cn(
    'py-4 select-none lg:p-0 text-primary-foreground hover:text-ring transition-colors',
    className
  )

  return (
    <li className={classes} {...rest}>
      {children}
    </li>
  )
}
export default NavItem
