import {
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { cn } from '@/utils/tailwind'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

type CustomLinkProps = PropsWithChildren & { href: string }

const CustomLink = ({ href, children }: CustomLinkProps) => {
  const navigationMenuLinkClasses = cn(
    navigationMenuTriggerStyle(),
    'bg-transparent'
  )

  return (
    <NavigationMenuLink asChild className={navigationMenuLinkClasses}>
      <Link href={href}>{children}</Link>
    </NavigationMenuLink>
  )
}
export default CustomLink
