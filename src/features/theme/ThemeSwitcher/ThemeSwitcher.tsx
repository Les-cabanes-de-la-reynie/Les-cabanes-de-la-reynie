'use client'

import { ThemeMode } from '@/features/theme/types'
import { APP_ICON_SIZE_CLASSNAME } from '@/shared/_constants/className'
import { IconContainer } from '@/shared/components/IconContainer'
import { TextWithSkewBackgroundColor } from '@/shared/components/TextWithSkewBackgroundColor'
import { Button } from '@/shared/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/shared/components/ui/dropdown-menu'
import { cn } from '@/shared/utils/tailwind'
import { Moon, Sun } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'
import { ThemeSwitcherIcon } from './ThemeSwitcherIcon'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  const t = useTranslations('ThemeSwitcher')

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' size='icon'>
          <Sun
            className={cn(
              'rotate-0 scale-100 dark:-rotate-90 dark:scale-0',
              APP_ICON_SIZE_CLASSNAME
            )}
          />
          <Moon
            className={cn(
              'absolute rotate-90 scale-0 dark:rotate-0 dark:scale-100',
              APP_ICON_SIZE_CLASSNAME
            )}
          />
          <span className='sr-only'>{t('themeSwitcherAccessibleText')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-max'>
        <DropdownMenuLabel>{t('themeSwitcherTitle')}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem onClick={() => setTheme(ThemeMode.Dark)}>
          <div className='flex gap-2'>
            <IconContainer>
              <ThemeSwitcherIcon theme={ThemeMode.Dark} />
            </IconContainer>

            {theme === ThemeMode.Dark ? (
              <TextWithSkewBackgroundColor>
                {t('darkModeTheme')}
              </TextWithSkewBackgroundColor>
            ) : (
              t('darkModeTheme')
            )}
          </div>
        </DropdownMenuItem>

        <DropdownMenuItem onClick={() => setTheme(ThemeMode.Light)}>
          <div className='flex gap-2'>
            <IconContainer>
              <ThemeSwitcherIcon theme={ThemeMode.Light} />
            </IconContainer>

            {theme === ThemeMode.Light ? (
              <TextWithSkewBackgroundColor>
                {t('lightModeTheme')}
              </TextWithSkewBackgroundColor>
            ) : (
              t('lightModeTheme')
            )}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
