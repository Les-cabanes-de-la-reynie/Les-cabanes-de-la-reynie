import { ForwardRefRenderFunction, PropsWithChildren, forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { ClassNameProps } from '@/_types/components'

type NavListProps = PropsWithChildren & ClassNameProps

const NavList: ForwardRefRenderFunction<HTMLUListElement, NavListProps> = (
  { children, className },
  ref
) => {
  const classes = cn(
    'flex flex-col gap-x-8 text-lg select-none lg:flex-row lg:items-center',
    className
  )

  return (
    <ul className={classes} ref={ref}>
      {children}
    </ul>
  )
}

export default forwardRef(NavList)
