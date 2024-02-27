'use client'

import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/tailwind'
import { usePathname } from 'next/navigation'
import { ComponentPropsWithoutRef, PropsWithChildren } from 'react'

type NavItemProps = PropsWithChildren &
  ClassNameProps &
  ComponentPropsWithoutRef<'li'> & {
    routes?: string[]
  }

const NavItem = ({ routes, children, className, ...rest }: NavItemProps) => {
  const currentRoute = usePathname()

  const classes = cn(
    'py-4 select-none lg:p-0 text-primary-foreground lg:hover:text-ring transition-colors',
    {
      'lg:border-b-2 lg:border-ring lg:w-max lg:text-primary-foreground':
        routes?.includes(currentRoute)
    },
    className
  )

  return (
    <li className={classes} {...rest}>
      {children}
    </li>
  )
}
export default NavItem
