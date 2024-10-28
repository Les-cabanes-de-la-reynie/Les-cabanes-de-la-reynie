import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { env } from '@/lib/env'
import { usePathname, useRouter } from '@/navigation'
import { transformLocaleToCountry } from '@/utils/formats'
import { cn } from '@/utils/tailwind'
import { useLocale, useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { PADDING_ITEM } from '../themeSwitcher/ThemeSwitcher'
import { LanguageSwitcherButton } from './LanguageSwitcherButton'

export const LanguagesSwitcher = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('Navigation')
  const currentLocale = useLocale()

  const onSelectChange = (locale: string) => {
    const nextLocale = locale
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
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
          {env.NEXT_PUBLIC_LANGS?.map(locale => {
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
