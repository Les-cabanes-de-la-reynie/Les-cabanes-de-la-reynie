import { PropsWithChildren } from 'react'
import Link, { LinkProps } from 'next/link'
import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/cn'

interface AsideProductCategoryProps
  extends PropsWithChildren,
    ClassNameProps,
    LinkProps {
  isActiveLink: boolean
}

const AsideProductCategory = ({
  href,
  isActiveLink,
  className,
  children
}: AsideProductCategoryProps) => {
  const classes = cn(
    'flex p-4 font-medium text-white transition hover:bg-stone-950 hover:bg-opacity-25',
    {
      'bg-stone-950 hover:bg-opacity-100': isActiveLink
    },
    className
  )

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
export default AsideProductCategory
