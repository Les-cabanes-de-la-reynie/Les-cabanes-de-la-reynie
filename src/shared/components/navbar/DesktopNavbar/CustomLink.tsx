import {
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/shared/components/ui/navigation-menu'
import { cn } from '@/shared/utils/tailwind'
import Link from 'next/link'
import { PropsWithChildren } from 'react'

type CustomLinkProps = PropsWithChildren & { href: string; isActive: boolean }

export const CustomLink = ({ href, isActive, children }: CustomLinkProps) => {
  const navigationMenuLinkClasses = cn(
    navigationMenuTriggerStyle(),
    'bg-transparent',
    { 'bg-accent text-accent-foreground': isActive }
  )

  return (
    <NavigationMenuLink asChild className={navigationMenuLinkClasses}>
      <Link href={href}>{children}</Link>
    </NavigationMenuLink>
  )
}
