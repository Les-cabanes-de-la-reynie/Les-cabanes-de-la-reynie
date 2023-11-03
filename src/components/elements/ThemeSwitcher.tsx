'use client'

import * as React from 'react'
import { Moon, Sun, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { ThemeMode } from '@/_types/theme'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { PopoverClose } from '@radix-ui/react-popover'
import P from './P'
import { Separator } from '@/components/ui/separator'
import { useTranslations } from 'next-intl'

interface ThemeSwitcherProps {
  handleCloseBurgerMenu: () => void
}

export const ThemeSwitcher = ({
  handleCloseBurgerMenu
}: ThemeSwitcherProps) => {
  const { setTheme } = useTheme()

  const t = useTranslations('Navigation')

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant='ghost'
          size='icon'
          className='rounded-full text-primary-foreground hover:bg-primary'
        >
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-36'>
        <>
          <P className='mb-2 select-none'>{t('themeSwitcherTitle')}</P>
          <Separator className='mb-2' />
          <Button
            variant='ghost'
            className='w-full select-none justify-start'
            onClick={() => setTheme(ThemeMode.Dark)}
          >
            {t('darkModeTheme')}
          </Button>
          <Button
            variant='ghost'
            className='w-full select-none justify-start'
            onClick={() => setTheme(ThemeMode.Light)}
          >
            {t('lightModeTheme')}
          </Button>
          <Button
            variant='ghost'
            className='w-full select-none justify-start'
            onClick={() => setTheme(ThemeMode.System)}
          >
            {t('systemModeTheme')}
          </Button>
        </>
        <PopoverClose
          onClick={handleCloseBurgerMenu}
          className='absolute right-[7px] top-[7px] inline-flex h-[25px] w-[25px] cursor-pointer items-center justify-center rounded-full border outline-none transition-colors hover:text-primary focus:shadow-[0_0_0_2px]'
          aria-label='Close'
        >
          <X size={16} />
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}
