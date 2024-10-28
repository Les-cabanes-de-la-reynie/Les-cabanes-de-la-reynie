'use client'

import { Container } from '@/components/Container'
import { cn } from '@/utils/tailwind'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from './navbar/Navbar'

export const SCROLL_Y_LIMIT = 100

export const DEFAULT_HEADER_CLASSNAME =
  'sticky inset-0 z-20 flex transition-colors duration-300 h-[4.5rem] w-full bg-primary lg:bg-transparent lg:bg-gradient-to-b lg:from-neutral-900 lg:to-transparent'

export const Header = () => {
  const [headerClassName, setHeaderClassName] = useState(
    DEFAULT_HEADER_CLASSNAME
  )
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

  useEffect(() => {
    setHeaderClassName(
      cn(DEFAULT_HEADER_CLASSNAME, {
        'lg:bg-primary lg:bg-none':
          clientWindowHeight > SCROLL_Y_LIMIT || pathWithoutLocale !== '/'
      })
    )
  }, [pathWithoutLocale, clientWindowHeight])

  return (
    <header className={headerClassName}>
      <Container className='justify-center py-0 md:py-0'>
        <Navbar />
      </Container>
    </header>
  )
}
