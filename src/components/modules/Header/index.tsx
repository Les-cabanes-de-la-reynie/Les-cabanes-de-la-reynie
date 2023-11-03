'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Logo from '@/components/elements/Logo'
import BurgerMenu from '@/components/elements/BurgerMenu'
import HeaderContent from './HeaderContent'
import { DEFAULT_HEADER_CLASSNAME, SCROLL_Y_LIMIT } from './const'
import Container from '@/components/elements/Container'
import useToggle from '@/hooks/useToggle'
import { cn } from '@/lib/utils'

const Header = () => {
  const [headerClassName, setHeaderClassName] = useState(
    DEFAULT_HEADER_CLASSNAME
  )
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
      cn(DEFAULT_HEADER_CLASSNAME, {
        'lg:bg-primary-dark lg:bg-none':
          clientWindowHeight > SCROLL_Y_LIMIT || pathWithoutLocale !== '/'
      })
    )
  }, [pathWithoutLocale, clientWindowHeight])

  return (
    <header className={headerClassName}>
      <Container className='justify-center'>
        <div className='flex items-center justify-between lg:justify-normal'>
          <Logo />
          <BurgerMenu
            isBurgerMenuOpen={isBurgerMenuOpen}
            onToggleBurgerMenu={handleToggleBurgerMenu}
          />
          <HeaderContent
            isBurgerMenuOpen={isBurgerMenuOpen}
            handleCloseBurgerMenu={() => setIsBurgerMenuOpen(false)}
          />
        </div>
      </Container>
    </header>
  )
}

export default Header
