import { PropsWithChildren } from 'react'
import { cn } from '@/utils/cn'
import { ClassNameProps } from '@/_types/components'

interface NavListProps extends PropsWithChildren, ClassNameProps {}

const NavList = ({ children, className }: NavListProps) => {
  const classes = cn(
    'flex flex-col gap-x-8 text-lg text-white select-none lg:flex-row lg:items-center',
    className
  )

  return <ul className={classes}>{children}</ul>
}
export default NavList
