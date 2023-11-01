'use client'

import { useTransition } from 'react'
import { env } from '@/env'
import { usePathname, useRouter } from 'next-intl/client'
import { Button } from '@/components/ui/button'
import { transformLocaleToCountry } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

const LocaleList = () => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()

  const onSelectChange = (locale: string) => {
    const nextLocale = locale
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
  }

  return (
    <>
      <p className='mb-2 select-none'>Languages</p>
      <Separator className='mb-2' />
      <ul>
        {env.NEXT_PUBLIC_LANGS?.map(locale => {
          return (
            <li key={locale}>
              <Button
                variant='ghost'
                className='w-full select-none justify-start'
                onClick={() => onSelectChange(locale)}
                disabled={isPending}
              >
                {transformLocaleToCountry(locale)}
              </Button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
export default LocaleList
