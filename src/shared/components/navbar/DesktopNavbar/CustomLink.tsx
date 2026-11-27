import { Link } from '@/i18n/navigation'
import {
  HEADER_NAV_ITEM_ACTIVE_CLASSNAME,
  HEADER_NAV_ITEM_CLASSNAME
} from '@/shared/_constants/className'
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
    HEADER_NAV_ITEM_CLASSNAME,
    isActive && HEADER_NAV_ITEM_ACTIVE_CLASSNAME
  )

  return (
    <NavigationMenuLink asChild className={navigationMenuLinkClasses}>
      <Link href={href}>{children}</Link>
    </NavigationMenuLink>
  )
}
