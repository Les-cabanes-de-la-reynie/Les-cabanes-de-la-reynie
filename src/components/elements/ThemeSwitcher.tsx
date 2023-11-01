'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { ThemeMode } from '@/_types/theme'

export function ThemeSwitcher({ ...rest }) {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant='ghost'
      size='icon'
      className='rounded-full text-primary-foreground hover:text-primary-foreground'
      onClick={() =>
        setTheme(theme === ThemeMode.Dark ? ThemeMode.Light : ThemeMode.Dark)
      }
      {...rest}
    >
      <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
