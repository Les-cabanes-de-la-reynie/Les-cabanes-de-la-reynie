'use client'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { ThemeMode } from '@/_types/theme'

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
      className={`absolute right-5 top-2 w-fit rounded-md bg-slate-200 p-2 capitalize duration-200 hover:scale-110 active:scale-100 dark:bg-[#212933]`}
      onClick={() =>
        setTheme(theme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark)
      }
    >
      {theme === ThemeMode.Light ? ThemeMode.Dark : ThemeMode.Light}
    </button>
  )
}
