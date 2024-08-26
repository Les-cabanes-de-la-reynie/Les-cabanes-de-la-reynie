'use client'

import Container from '@/components/elements/Container'
import { cn } from '@/utils/tailwind'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navbar } from '../Navbar'
import { DEFAULT_HEADER_CLASSNAME, SCROLL_Y_LIMIT } from './const'

const Header = () => {
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

export default Header
