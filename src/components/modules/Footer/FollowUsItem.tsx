import { PropsWithChildren } from 'react'
import Link from 'next/link'

type FollowUsItemProps = PropsWithChildren & {
  href: string
}

const FollowUsItem = ({ children, href, ...rest }: FollowUsItemProps) => {
  return (
    <Link
      href={href}
      className='flex h-10 w-10 items-center justify-center rounded-full border border-primary bg-card transition-colors hover:bg-primary hover:text-primary-foreground'
      {...rest}
    >
      {children}
    </Link>
  )
}
export default FollowUsItem
