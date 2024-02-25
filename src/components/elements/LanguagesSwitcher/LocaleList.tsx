'use client'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { env } from '@/lib/env'
import { formatLocaleToCountry } from '@/utils/formats'
import { useTranslations } from 'next-intl'
import { useTransition } from 'react'
import { usePathname, useRouter } from '../../../navigation'
import P from '../P'

const LocaleList = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('Navigation')

  const onSelectChange = (locale: string) => {
    const nextLocale = locale
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <>
      <P className='mb-2 select-none'>{t('switchLangTitle')}</P>
      <Separator className='mb-2' />
      <ul aria-labelledby='language-menu-button'>
        {env.NEXT_PUBLIC_LANGS?.map(locale => {
          return (
            <li key={locale}>
              <Button
                variant='ghost'
                className='w-full select-none justify-start'
                onClick={() => onSelectChange(locale)}
                disabled={isPending}
              >
                {formatLocaleToCountry(locale)}
              </Button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default LocaleList
