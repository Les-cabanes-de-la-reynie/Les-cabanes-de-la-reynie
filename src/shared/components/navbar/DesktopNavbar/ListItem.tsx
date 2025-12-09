import { Link } from '@/i18n/navigation'
import { NavigationMenuLink } from '@/shared/components/ui/navigation-menu'
import { cn } from '@/shared/utils/tailwind'
import { ComponentProps, forwardRef } from 'react'

type ListItemProps = Omit<ComponentProps<typeof Link>, 'ref'> & {
  title: string
  className?: string
}

export const ListItem = forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, children, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href={href}
            data-testid={`accommodations-sub-navigation-${title?.toLocaleLowerCase()}`}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
