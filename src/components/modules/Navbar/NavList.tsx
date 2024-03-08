import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/tailwind'
import { ForwardRefRenderFunction, PropsWithChildren, forwardRef } from 'react'

type NavListProps = PropsWithChildren & ClassNameProps

const NavList: ForwardRefRenderFunction<HTMLUListElement, NavListProps> = (
  { children, className },
  ref
) => {
  const classes = cn(
    'flex flex-col gap-x-8 h-full text-lg select-none lg:flex-row lg:items-center',
    className
  )

  return (
    <ul className={classes} ref={ref}>
      {children}
    </ul>
  )
}

export default forwardRef(NavList)
