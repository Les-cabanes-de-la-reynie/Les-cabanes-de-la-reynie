import LanguagesSwitcher from '@/components/elements/LanguagesSwitcher'
import Logo from '@/components/elements/Logo'
import { ThemeSwitcher } from '@/components/elements/ThemeSwitcher'
import { Button } from '@/components/ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/utils/tailwind'
import { ChevronRightIcon, MenuIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import Profile from '../Profile'
import ListItem from './ListItem'

export const Navbar = () => {
  const [mobileNavbarOpened, setMobileNavbarOpened] = useState(false)

  const tCommon = useTranslations('Common')
  const tSEO = useTranslations('SEO')
  const tNavigation = useTranslations('Navigation')
  const lang = useLocale()

  const navLinks = {
    home: `/${lang}`,
    yurt: `/${lang}/logements/yourte`,
    hut: `/${lang}/logements/cabane`,
    contact: `/${lang}/contact`,
    activities: `/${lang}/activites`
  }

  const navigationMenuLinkClasses = cn(
    navigationMenuTriggerStyle(),
    'bg-transparent'
  )

  const handleCloseNavbar = () => {
    setMobileNavbarOpened(false)
  }

  return (
    <div
      className='flex items-center justify-between lg:justify-normal'
      data-testid='header-navbar'
    >
      <div className='flex justify-between w-full lg:justify-normal'>
        <Logo />

        <Sheet open={mobileNavbarOpened} onOpenChange={setMobileNavbarOpened}>
          <SheetTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              data-testid='open-burger-menu-button'
              className='lg:hidden'
            >
              <MenuIcon className='h-6 w-6' />
              <span className='sr-only'>{tNavigation('openBurgerMenu')}</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side='right'
            data-testid='mobile-header-navbar'
            className='lg:hidden bg-primary text-white'
          >
            <Logo onCloseMenu={handleCloseNavbar} />

            <div className='grid gap-2 py-6'>
              <Link
                href={navLinks.home}
                onClick={handleCloseNavbar}
                className='flex w-full items-center py-2 text-lg font-semibold'
                prefetch={false}
              >
                {tCommon('home')}
              </Link>
              <Collapsible className='grid gap-4'>
                <CollapsibleTrigger className='flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90'>
                  {tCommon('accommodations')}
                  <ChevronRightIcon className='ml-auto h-5 w-5 transition-all' />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className='-mx-6 grid gap-6 px-10 py-2 bg-primary'>
                    <Link
                      href={navLinks.yurt}
                      onClick={handleCloseNavbar}
                      className='group grid h-auto w-full justify-start gap-1'
                      prefetch={false}
                    >
                      <div className='text-sm font-medium leading-none group-hover:underline'>
                        {tCommon('yurt')}
                      </div>
                    </Link>
                    <Link
                      href={navLinks.hut}
                      onClick={handleCloseNavbar}
                      className='group grid h-auto w-full justify-start gap-1'
                      prefetch={false}
                    >
                      <div className='text-sm font-medium leading-none group-hover:underline'>
                        {tCommon('hut')}
                      </div>
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Link
                href={navLinks.contact}
                onClick={handleCloseNavbar}
                className='flex w-full items-center py-2 text-lg font-semibold'
                prefetch={false}
              >
                {tCommon('contact')}
              </Link>
              <Link
                href={navLinks.activities}
                onClick={handleCloseNavbar}
                className='flex w-full items-center py-2 text-lg font-semibold'
                prefetch={false}
              >
                {tCommon('activities')}
              </Link>

              <Separator />

              <LanguagesSwitcher />

              <ThemeSwitcher />

              <Profile />
            </div>
          </SheetContent>
        </Sheet>

        <NavigationMenu
          data-testid='desktop-header-navbar'
          className='hidden lg:flex text-white'
        >
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href={navLinks.home}
                className={navigationMenuLinkClasses}
                prefetch={false}
              >
                {tCommon('home')}
              </Link>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-transparent'>
                {tCommon('accommodations')}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid gap-3 p-4 grid-cols-2 w-[600px]'>
                  <ListItem
                    key={tCommon('yurt')}
                    title={tCommon('yurt')}
                    href={navLinks.yurt}
                  >
                    {tSEO('yurtDescription')}
                  </ListItem>
                  <ListItem
                    key={tCommon('hut')}
                    title={tCommon('hut')}
                    href={navLinks.hut}
                  >
                    {tSEO('hutDescription')}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href={navLinks.contact}
                className={navigationMenuLinkClasses}
                prefetch={false}
              >
                {tCommon('contact')}
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href={navLinks.activities}
                className={navigationMenuLinkClasses}
                prefetch={false}
              >
                {tCommon('activities')}
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <NavigationMenu
        data-testid='desktop-header-navbar'
        className='hidden lg:flex text-white'
      >
        <NavigationMenuList>
          <NavigationMenuLink asChild>
            <LanguagesSwitcher />
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <ThemeSwitcher />
          </NavigationMenuLink>
          <NavigationMenuLink asChild>
            <Profile />
          </NavigationMenuLink>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
