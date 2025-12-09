import { Link } from '@/i18n/navigation'
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from '@/shared/components/ui/navigation-menu'
import { cn } from '@/shared/utils/tailwind'
import { ComponentProps, PropsWithChildren } from 'react'

type CustomLinkProps = PropsWithChildren & {
  href: ComponentProps<typeof Link>['href']
  isActive: boolean
}

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
