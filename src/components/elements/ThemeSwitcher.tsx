'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { ThemeMode } from '@/_types/theme'
import { MoonIcon, SunIcon } from 'lucide-react'

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <button
      className='rounded-full bg-zinc-800 p-2 text-sm capitalize transition-colors dark:bg-zinc-800'
      onClick={() =>
        setTheme(theme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark)
      }
    >
      {theme === ThemeMode.Light ? (
        <MoonIcon size={20} />
      ) : (
        <SunIcon size={20} />
      )}
    </button>
  )
}
