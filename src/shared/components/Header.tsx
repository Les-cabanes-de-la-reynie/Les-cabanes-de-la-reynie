'use client'

import { PAGE_ROUTES } from '@/shared/_constants/page'
import { Container } from '@/shared/components/Container'
import { cn } from '@/shared/utils/tailwind'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from './navbar/Navbar'

const CONFIG = {
  SCROLL_Y_LIMIT: 100,
  BASE_CLASSES: [
    'sticky',
    'inset-0',
    'z-20',
    'shrink-0',
    'flex',
    'transition-colors',
    'duration-300',
    'h-[4.5rem]',
    'w-full'
  ]
} as const

export const Header = () => {
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()
  const isHomePage = pathname === PAGE_ROUTES.home
  const isAtTop = scrollY <= CONFIG.SCROLL_Y_LIMIT

  // Scroll handler with throttling
  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    // Initialize scrollY on mount
    setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const headerClasses = cn(
    CONFIG.BASE_CLASSES,
    { 'bg-primary': !isHomePage || !isAtTop },
    {
      'bg-transparent lg:bg-gradient-to-b lg:from-neutral-900 lg:to-transparent':
        isHomePage && isAtTop
    }
  )

  return (
    <header className={headerClasses}>
      <Container className='justify-center py-0 md:py-0'>
        <Navbar />
      </Container>
    </header>
  )
}
