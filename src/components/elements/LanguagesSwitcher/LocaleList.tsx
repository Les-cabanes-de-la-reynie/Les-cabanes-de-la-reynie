'use client'

import { useTransition } from 'react'
import { usePathname, useRouter } from 'next-intl/client'
import { transformLocaleToCountry } from 'utils/transformLocaleToCountry'
import Popup from '../Popup'
import Button from '../Button'

interface LocaleListProps {
  isLocaleListOpen: boolean
  onClosePopup: () => void
}

const LocaleList = ({ isLocaleListOpen, onClosePopup }: LocaleListProps) => {
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()

  const onSelectChange = (locale: string) => {
    const nextLocale = locale
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale })
    })
    onClosePopup()
  }

  return (
    <Popup isOpen={isLocaleListOpen} cb={onClosePopup} className='select-none'>
      <ul aria-labelledby='language-menu-button'>
        {['en', 'fr'].map((locale, i, array) => {
          const lastElement = array[array.length - 1]
          const isLastElement = array.indexOf(lastElement) === i

          return (
            <li key={locale}>
              <Button
                kind='headless'
                onClick={() => onSelectChange(locale)}
                onBlur={isLastElement ? onClosePopup : undefined}
                className='block w-full rounded-lg p-2 text-white hover:bg-primary-dark lg:hover:bg-primary-hover'
                disabled={isPending}
              >
                {transformLocaleToCountry(locale)}
              </Button>
            </li>
          )
        })}
      </ul>
    </Popup>
  )
}
export default LocaleList
