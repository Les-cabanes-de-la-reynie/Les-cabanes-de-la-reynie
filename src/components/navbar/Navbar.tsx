import { SEO } from '@/_constants/SEO'
import { Logo } from '@/components/Logo'
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
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { LanguagesSwitcher } from '@/features/languagesSwitcher/LanguagesSwitcher'
import { ThemeSwitcher } from '@/features/themeSwitcher/ThemeSwitcher'
import { Profile } from '@/features/userProfile/Profile'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { ChevronRightIcon, MenuIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { useState } from 'react'
import { CustomLink } from './CustomLink'
import { ListItem } from './ListItem'

export const Navbar = () => {
  const [mobileNavbarOpened, setMobileNavbarOpened] = useState(false)

  const tCommon = useTranslations('Common')
  const tNavigation = useTranslations('Navigation')

  const navLinks = {
    home: '/',
    yurt: '/logements/yourte',
    hut: '/logements/cabane',
    activities: '/activites',
    contact: '/contact'
  }

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
            <SheetTitle>
              <Logo onCloseMenu={handleCloseNavbar} />
              <SheetDescription>
                <VisuallyHidden.Root>
                  Mobile navigation menu
                </VisuallyHidden.Root>
              </SheetDescription>
            </SheetTitle>

            <div className='grid gap-2 py-6'>
              <Link
                href={navLinks.home}
                onClick={handleCloseNavbar}
                className='flex w-full items-center py-2 text-lg font-semibold'
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
                    >
                      <div className='text-sm font-medium leading-none group-hover:underline'>
                        {tCommon('yurt')}
                      </div>
                    </Link>
                    <Link
                      href={navLinks.hut}
                      onClick={handleCloseNavbar}
                      className='group grid h-auto w-full justify-start gap-1'
                    >
                      <div className='text-sm font-medium leading-none group-hover:underline'>
                        {tCommon('hut')}
                      </div>
                    </Link>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              <Link
                href={navLinks.activities}
                onClick={handleCloseNavbar}
                className='flex w-full items-center py-2 text-lg font-semibold'
              >
                {tCommon('activities')}
              </Link>
              <Link
                href={navLinks.contact}
                onClick={handleCloseNavbar}
                className='flex w-full items-center py-2 text-lg font-semibold'
              >
                {tCommon('contact')}
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
            <NavigationMenuItem>
              <CustomLink href={navLinks.home}> {tCommon('home')}</CustomLink>
            </NavigationMenuItem>
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
                    {SEO.accommodation.yurt.description}
                  </ListItem>
                  <ListItem
                    key={tCommon('hut')}
                    title={tCommon('hut')}
                    href={navLinks.hut}
                  >
                    {SEO.accommodation.hut.description}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <CustomLink href={navLinks.activities}>
                {tCommon('activities')}
              </CustomLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <CustomLink href={navLinks.contact}>
                {tCommon('contact')}
              </CustomLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div
        data-testid='desktop-header-navbar'
        className='hidden lg:flex text-white group flex-1 list-none items-center justify-center space-x-1'
      >
        <LanguagesSwitcher />
        <ThemeSwitcher />
        <Profile />
      </div>
    </div>
  )
}
