'use client'

import { ThemeMode } from '@/_types/theme'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils/tailwind'
import { Moon, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'

export const PADDING_ITEM = 'pl-4 py-2'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const t = useTranslations('ThemeSwitcher')

  const darkButtonClasses = cn(PADDING_ITEM, {
    'underline decoration-primary decoration-2 underline-offset-4':
      theme === ThemeMode.Dark
  })

  const lightButtonClasses = cn(PADDING_ITEM, {
    'underline decoration-primary decoration-2 underline-offset-4':
      theme === ThemeMode.Light
  })

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>{t('themeSwitcherAccessibleText')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-max'>
        <DropdownMenuLabel>{t('themeSwitcherTitle')}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className={darkButtonClasses}
          onClick={() => setTheme(ThemeMode.Dark)}
        >
          {t('darkModeTheme')}
        </DropdownMenuItem>

        <DropdownMenuItem
          className={lightButtonClasses}
          onClick={() => setTheme(ThemeMode.Light)}
        >
          {t('lightModeTheme')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
