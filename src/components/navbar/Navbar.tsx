import { Logo } from '@/components/Logo'
import { LanguagesSwitcher } from '@/features/languagesSwitcher/LanguagesSwitcher'
import { ThemeSwitcher } from '@/features/themeSwitcher/ThemeSwitcher'
import { Profile } from '@/features/userProfile/Profile'
import { useState } from 'react'
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
        className='hidden lg:flex text-white group flex-1 list-none items-center justify-center space-x-1'
      >
        <LanguagesSwitcher />
        <ThemeSwitcher />
        <Profile />
      </div>
    </div>
  )
}
