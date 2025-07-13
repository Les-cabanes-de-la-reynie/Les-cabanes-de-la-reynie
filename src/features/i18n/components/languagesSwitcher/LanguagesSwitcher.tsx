'use client'

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
import { transformLocaleToCountry } from '@/shared/utils/formats'
import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { Locale, locales } from '../../config'
import { setUserLocale } from '../../infrastructure/locale'
import { LanguageSwitcherButton } from './LanguageSwitcherButton'
import { LanguagesSwitcherFlag } from './LanguagesSwitcherFlag'

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
                onClick={() => onSelectChange(locale)}
                disabled={isPending}
              >
                <div className='flex gap-2'>
                  <IconContainer>
                    <LanguagesSwitcherFlag locale={locale} />
                  </IconContainer>

                  {locale === currentLocale ? (
                    <TextWithSkewBackgroundColor>
                      {transformLocaleToCountry(locale)}
                    </TextWithSkewBackgroundColor>
                  ) : (
                    transformLocaleToCountry(locale)
                  )}
                </div>
              </DropdownMenuItem>
            )
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
