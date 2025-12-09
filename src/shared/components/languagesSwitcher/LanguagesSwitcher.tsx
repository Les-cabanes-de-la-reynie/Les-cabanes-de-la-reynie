'use client'

import { Link, usePathname } from '@/i18n/navigation'
import { routing } from '@/i18n/routing'
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
import { LanguageSwitcherButton } from './LanguageSwitcherButton'
import { LanguagesSwitcherFlag } from './LanguagesSwitcherFlag'

export const LanguagesSwitcher = () => {
  const t = useTranslations('Navigation')
  const currentLocale = useLocale()
  const pathname = usePathname()

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
          {routing.locales?.map(locale => {
            return (
              <DropdownMenuItem key={locale} asChild>
                <Link
                  href={pathname}
                  locale={locale}
                  data-testid={`switch-language-${locale}`}
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
                </Link>
              </DropdownMenuItem>
            )
          })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
