'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { ThemeMode } from '@/_types/theme'
import { MoonIcon, SunIcon } from 'lucide-react'
import Button from './Button'

export const ThemeSwitcher = ({ ...rest }) => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Button
      className='rounded-full p-2 text-sm capitalize text-white transition-colors hover:bg-primary-hover'
      kind='headless'
      onClick={() =>
        setTheme(theme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark)
      }
      {...rest}
    >
      {theme === ThemeMode.Light ? (
        <MoonIcon size={20} />
      ) : (
        <SunIcon size={20} />
      )}
    </Button>
  )
}
