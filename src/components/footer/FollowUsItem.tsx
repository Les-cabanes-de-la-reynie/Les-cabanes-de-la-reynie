import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { FooterItem } from './FooterItem'

type FollowUsItemProps = PropsWithChildren & {
  href: string
}

export const FollowUsItem = ({
  children,
  href,
  ...rest
}: FollowUsItemProps) => {
  return (
    <FooterItem>
      <Link href={href} {...rest}>
        {children}
      </Link>
    </FooterItem>
  )
}
