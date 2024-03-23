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
    'py-4 select-none lg:p-0 lg:flex lg:items-center text-primary-foreground lg:hover:text-black transition-colors lg:h-full',
    {
      'lg:border-b-2 lg:border-primary-foreground lg:w-max lg:text-primary-foreground':
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
