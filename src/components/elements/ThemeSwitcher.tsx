'use client'

import { useTheme } from 'next-themes'
import { ThemeMode } from '_types/theme'
import { MoonIcon, SunIcon } from 'lucide-react'
import Button from './Button'

export const ThemeSwitcher = ({ ...rest }) => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      className='flex items-center justify-center rounded-full p-2 text-sm capitalize text-white transition-colors hover:bg-primary-hover'
      kind='headless'
      onClick={() =>
        setTheme(theme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark)
      }
      {...rest}
    >
      <SunIcon size={20} className='scale-100 dark:scale-0' />
      <MoonIcon size={20} className='absolute scale-0 dark:scale-100' />
    </Button>
  )
}
