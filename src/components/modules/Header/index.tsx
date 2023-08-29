'use client'

import { useEffect } from 'react'
import Logo from '@/components/elements/Logo'
import BurgerMenu from '@/components/elements/BurgerMenu'
import HeaderContent from './HeaderContent'
import useToggle from '@/hooks/useToggle'

const Header = () => {
  const [isBurgerMenuOpen, handleToggleBurgerMenu, setIsBurgerMenuOpen] =
    useToggle()

  // Also close the overlay if the window gets resized past mobile layout.
  // (This is also important because we don't want to keep the body locked!)
  useEffect(() => {
    const media = window.matchMedia(`(max-width: 1023px)`)

    function closeIfNeeded() {
      if (!media.matches) {
        setIsBurgerMenuOpen(false)
      }
    }

    closeIfNeeded()
    media.addEventListener('change', closeIfNeeded)
    return () => {
      media.removeEventListener('change', closeIfNeeded)
    }
  }, [])

  return (
    <header className='sticky inset-0 z-20 flex h-[4.5rem] w-full border-b border-border bg-stone-950'>
      <div className='container flex items-center justify-between lg:justify-normal'>
        <Logo className='mr-8 text-white' />
        <BurgerMenu
          isBurgerMenuOpen={isBurgerMenuOpen}
          onToggleBurgerMenu={handleToggleBurgerMenu}
        />
        <HeaderContent
          isBurgerMenuOpen={isBurgerMenuOpen}
          handleCloseBurgerMenu={() => setIsBurgerMenuOpen(false)}
        />
      </div>
    </header>
  )
}

export default Header
