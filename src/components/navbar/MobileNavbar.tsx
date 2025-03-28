import { Profile } from '@/features/auth/Profile/Profile'
import { LanguagesSwitcher } from '@/features/languagesSwitcher/LanguagesSwitcher'
import { ThemeSwitcher } from '@/features/themeSwitcher/ThemeSwitcher'
import { cn } from '@/utils/tailwind'
import * as VisuallyHidden from '@radix-ui/react-visually-hidden'
import { ChevronRightIcon, MenuIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Dispatch } from 'react'
import { Logo } from '../Logo'
import { Button } from '../ui/button'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '../ui/collapsible'
import { Separator } from '../ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger
} from '../ui/sheet'
import { useGetNavigationLinks } from './hook'

type MobileNavbarProps = {
  mobileNavbarOpened: boolean
  setMobileNavbarOpened: Dispatch<boolean>
}

export const MobileNavbar = ({
  mobileNavbarOpened,
  setMobileNavbarOpened
}: MobileNavbarProps) => {
  const tNavigation = useTranslations('Navigation')

  const pathName = usePathname()

  const navLinks = useGetNavigationLinks()

  const handleCloseNavbar = () => {
    setMobileNavbarOpened(false)
  }

  return (
    <Sheet open={mobileNavbarOpened} onOpenChange={setMobileNavbarOpened}>
      <SheetTrigger asChild>
        <Button
          variant='outline'
          size='icon'
          className='lg:hidden'
          data-testid='open-burger-menu-button'
        >
          <MenuIcon className='h-6 w-6' />
          <span className='sr-only'>
            {mobileNavbarOpened
              ? tNavigation('closeBurgerMenu')
              : tNavigation('openBurgerMenu')}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side='right'
        data-testid='mobile-header-navbar'
        className='lg:hidden bg-card text-card-foreground flex flex-col'
      >
        <header>
          <SheetTitle>
            <Logo
              onCloseMenu={handleCloseNavbar}
              className='text-card-foreground border-card-foreground'
            />
            <SheetDescription>
              <VisuallyHidden.Root>Mobile navigation menu</VisuallyHidden.Root>
            </SheetDescription>
          </SheetTitle>
        </header>

        <Separator />

        <main className='flex flex-col flex-1 gap-2'>
          <Link
            href={navLinks.home.url}
            onClick={handleCloseNavbar}
            className={cn(
              'flex w-full items-center p-2 rounded text-lg font-semibold',
              { 'bg-accent': pathName === navLinks.home.url }
            )}
          >
            {navLinks.home.label}
          </Link>
          <Collapsible className='flex flex-col'>
            <CollapsibleTrigger
              className={cn(
                'flex w-full items-center text-lg p-2 rounded font-semibold [&[data-state=open]>svg]:rotate-90',
                {
                  'bg-accent':
                    pathName === navLinks.yurt.url ||
                    pathName === navLinks.hut.url
                }
              )}
            >
              {navLinks.accommodations.label}
              <ChevronRightIcon className='ml-auto transition-all' />
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className='-mx-6 flex flex-col border-primary border-l-2 gap-2 ml-2 px-4 py-2 mt-2'>
                <Link
                  href={navLinks.yurt.url}
                  onClick={handleCloseNavbar}
                  className={cn(
                    'w-full text-sm leading-none hover:underline p-2 rounded',
                    {
                      'bg-accent': pathName === navLinks.yurt.url
                    }
                  )}
                >
                  {navLinks.yurt.label}
                </Link>
                <Link
                  href={navLinks.hut.url}
                  onClick={handleCloseNavbar}
                  className={cn(
                    'w-full text-sm leading-none hover:underline p-2 rounded',
                    {
                      'bg-accent': pathName === navLinks.hut.url
                    }
                  )}
                >
                  {navLinks.hut.label}
                </Link>
              </div>
            </CollapsibleContent>
          </Collapsible>
          <Link
            href={navLinks.activities.url}
            onClick={handleCloseNavbar}
            className={cn(
              'flex w-full p-2 rounded items-center text-lg font-semibold',
              {
                'bg-accent': pathName === navLinks.activities.url
              }
            )}
          >
            {navLinks.activities.label}
          </Link>
          <Link
            href={navLinks.contact.url}
            onClick={handleCloseNavbar}
            className={cn(
              'flex w-full items-center p-2 rounded text-lg font-semibold',
              {
                'bg-accent': pathName === navLinks.contact.url
              }
            )}
          >
            {navLinks.contact.label}
          </Link>
        </main>

        <Separator />

        <footer className='flex flex-col gap-2'>
          <LanguagesSwitcher />

          <ThemeSwitcher />

          <Profile />
        </footer>
      </SheetContent>
    </Sheet>
  )
}
