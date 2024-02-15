import Link from 'next/link'
import { PropsWithChildren } from 'react'

type FollowUsItemProps = PropsWithChildren & {
  href: string
}

const FollowUsItem = ({ children, href, ...rest }: FollowUsItemProps) => {
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  )
}
export default FollowUsItem
