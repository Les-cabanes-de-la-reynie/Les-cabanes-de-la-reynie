'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { transformLocaleToCountry } from '@/utils/formats'
import { cn } from '@/utils/tailwind'
import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { Locale, locales } from '../i18n/config'
import { setUserLocale } from '../i18n/infrastructure/locale'
import { PADDING_ITEM } from '../themeSwitcher/ThemeSwitcher'
import { LanguageSwitcherButton } from './LanguageSwitcherButton'

export const LanguagesSwitcher = () => {
  const [isPending, startTransition] = useTransition()
  const t = useTranslations('Navigation')
  const currentLocale = useLocale()

  const onSelectChange = (value: string) => {
    const locale = value as Locale

    startTransition(() => {
      setUserLocale(locale)
    })
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='w-max'>
          <LanguageSwitcherButton />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{t('switchLangTitle')}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <div aria-labelledby='language-menu-button'>
          {locales?.map(locale => {
            return (
              <DropdownMenuItem
                key={locale}
                data-testid={`switch-language-${locale}`}
                className={cn(PADDING_ITEM, {
                  'underline decoration-primary decoration-2 underline-offset-4':
                    locale === currentLocale
                })}
                onClick={() => onSelectChange(locale)}
                disabled={isPending}
              >
                {transformLocaleToCountry(locale)}
              </DropdownMenuItem>
            )
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
