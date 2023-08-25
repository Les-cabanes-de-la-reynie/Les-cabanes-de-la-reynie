'use client'

import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ClassNameProps } from '@/_types/components'
import { cn } from '@/utils/cn'

interface AsideProductCategoryProps extends PropsWithChildren, ClassNameProps {
  href: string
}

const AsideProductCategory = ({
  href,
  className,
  children
}: AsideProductCategoryProps) => {
  const patname = usePathname()

  const classes = cn(
    'flex p-4 font-medium text-white transition hover:bg-stone-950 hover:bg-opacity-25',
    {
      'bg-stone-950 hover:bg-opacity-100': patname === href
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
