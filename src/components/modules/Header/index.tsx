'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Logo from '@/components/elements/Logo'
import BurgerMenu from '@/components/elements/BurgerMenu'
import HeaderContent from './HeaderContent'
import useToggle from '@/hooks/useToggle'
import { cn } from '@/utils/cn'
import { SCROLL_Y_LIMIT } from './const'

const Header = () => {
  const [headerClassName, setHeaderClassName] = useState('')
  const [isBurgerMenuOpen, handleToggleBurgerMenu, setIsBurgerMenuOpen] =
    useToggle()
  const [clientWindowHeight, setClientWindowHeight] = useState(0)

  const pathName = usePathname()
  const pathWithoutLocale = pathName.slice(0, -2)

  useEffect(() => {
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Also close the overlay if the window gets resized past mobile layout.
  // (This is also important because we don't want to keep the body locked!)
  useEffect(() => {
    const media = window.matchMedia(`(min-width: 1024px)`)

    const closeIfNeeded = () => {
      if (media.matches) {
        setIsBurgerMenuOpen(false)
      }
    }

    closeIfNeeded()
    media.addEventListener('change', closeIfNeeded)
    return () => media.removeEventListener('change', closeIfNeeded)
  }, [setIsBurgerMenuOpen])

  useEffect(() => {
    setHeaderClassName(
      cn(
        'sticky inset-0 z-20 flex h-[4.5rem] transition w-full border-b border-border bg-zinc-50 dark:bg-zinc-950',
        {
          'lg:fixed dark:lg:bg-transparent lg:bg-transparent lg:backdrop-blur-3xl lg:border-none lg:backdrop-opacity-50':
            pathWithoutLocale === '/',

          'lg:bg-zinc-50 dark:lg:bg-zinc-950 lg:backdrop-blur-none lg:border-b lg:backdrop-opacity-0':
            clientWindowHeight > SCROLL_Y_LIMIT
        }
      )
    )
  }, [pathWithoutLocale, clientWindowHeight])

  return (
    <header className={headerClassName}>
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
