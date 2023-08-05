import { PropsWithChildren } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ClassNameProps } from '@/_types/components'

export interface ActiveLinkProps extends PropsWithChildren, ClassNameProps {
  url: string
}

const ActiveLink = ({ url, className, children }: ActiveLinkProps) => {
  const path = usePathname()

  const classes = clsx(
    className,
    'flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent',
    {
      'dark:text-violet-400 dark:border-violet-400': path === url
    }
  )

  return (
    <Link href={url} className={classes}>
      {children}
    </Link>
  )
}
export default ActiveLink
