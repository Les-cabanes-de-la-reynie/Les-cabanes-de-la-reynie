import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { cn } from '@/utils/tailwind'
import { usePathname } from 'next/navigation'
import { useGetNavigationLinks } from '../hook'
import { CustomLink } from './CustomLink'
import { ListItem } from './ListItem'

export const DesktopNavbarContent = () => {
  const navLinks = useGetNavigationLinks()

  const pathName = usePathname()

  return (
    <>
      <NavigationMenu
        data-testid='desktop-header-navbar'
        className='hidden lg:flex text-primary-foreground'
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <CustomLink
              href={navLinks.home.url}
              isActive={pathName === navLinks.home.url}
            >
              {navLinks.home.label}
            </CustomLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
              className={cn('bg-transparent', {
                'bg-accent text-accent-foreground':
                  pathName === navLinks.yurt.url ||
                  pathName === navLinks.cabin.url
              })}
            >
              {navLinks.accommodations.label}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid gap-3 p-4 grid-cols-2 w-[600px]'>
                <ListItem
                  title={navLinks.yurt.label}
                  href={navLinks.yurt.url}
                  className={cn({
                    'bg-accent text-accent-foreground':
                      pathName === navLinks.yurt.url
                  })}
                >
                  {navLinks.yurt.description}
                </ListItem>
                <ListItem
                  title={navLinks.cabin.label}
                  href={navLinks.cabin.url}
                  className={cn({
                    'bg-accent text-accent-foreground':
                      pathName === navLinks.cabin.url
                  })}
                >
                  {navLinks.cabin.description}
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <CustomLink
              href={navLinks.activities.url}
              isActive={pathName === navLinks.activities.url}
            >
              {navLinks.activities.label}
            </CustomLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <CustomLink
              href={navLinks.contact.url}
              isActive={pathName === navLinks.contact.url}
            >
              {navLinks.contact.label}
            </CustomLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
