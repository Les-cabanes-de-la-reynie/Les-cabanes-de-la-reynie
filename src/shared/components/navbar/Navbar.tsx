import { Profile } from '@/features/auth/Profile/Profile'
import { LanguagesSwitcher } from '@/features/i18n/components/languagesSwitcher/LanguagesSwitcher'
import { ThemeSwitcher } from '@/features/theme/ThemeSwitcher/ThemeSwitcher'
import { useState } from 'react'
import { Logo } from '../Logo'
import { DesktopNavbarContent } from './DesktopNavbar/DesktopNavbarContent'
import { MobileNavbar } from './MobileNavbar'

export const Navbar = () => {
  const [mobileNavbarOpened, setMobileNavbarOpened] = useState(false)

  return (
    <div
      className='flex items-center justify-between lg:justify-normal'
      data-testid='header-navbar'
    >
      <div className='flex justify-between w-full lg:justify-normal'>
        <Logo />

        <MobileNavbar
          mobileNavbarOpened={mobileNavbarOpened}
          setMobileNavbarOpened={setMobileNavbarOpened}
        />

        <DesktopNavbarContent />
      </div>

      <div
        data-testid='desktop-header-navbar'
        className='hidden lg:flex text-primary-foreground group flex-1 list-none items-center justify-center space-x-1'
      >
        <LanguagesSwitcher />
        <ThemeSwitcher />
        <Profile />
      </div>
    </div>
  )
}
