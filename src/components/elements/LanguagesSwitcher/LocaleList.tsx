'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import i18n from '../../../../i18n'
import { transformLocaleToCountry } from '@/utils/transformLocaleToCountry'
import Popup from '../Popup'

interface LocaleListProps {
  isLocaleListOpen: boolean
  onClosePopup: () => void
}

const LocaleList = ({ isLocaleListOpen, onClosePopup }: LocaleListProps) => {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <Popup isOpen={isLocaleListOpen} cb={onClosePopup} className='select-none'>
      <ul aria-labelledby='language-menu-button'>
        {i18n.locales.map((locale, i, array) => {
          const lastElement = array[array.length - 1]
          const isLastElement = array.indexOf(lastElement) === i

          return (
            <li key={locale}>
              <Link
                href={redirectedPathName(locale)}
                as={redirectedPathName(locale)}
                onClick={onClosePopup}
                onBlur={isLastElement ? onClosePopup : undefined}
                className='block rounded p-3 text-white hover:bg-primary-dark lg:hover:bg-primary'
              >
                {transformLocaleToCountry(locale)}
              </Link>
            </li>
          )
        })}
      </ul>
    </Popup>
  )
}
export default LocaleList
