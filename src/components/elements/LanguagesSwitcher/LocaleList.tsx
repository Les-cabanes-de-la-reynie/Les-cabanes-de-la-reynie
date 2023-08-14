'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { i18n } from '../../../../i18n.config'
import { transformLocaleToCountry } from '@/utils/transformLocaleToCountry'
import Popup from '../Popup'

interface LocaleListProps {
  isLocaleListOpen: boolean
  handleCloseMenu: () => void
}

const LocaleList = ({ isLocaleListOpen, handleCloseMenu }: LocaleListProps) => {
  const pathName = usePathname()

  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    const segments = pathName.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <Popup
      isOpen={isLocaleListOpen}
      cb={handleCloseMenu}
      className='select-none'
    >
      <ul aria-labelledby='language-menu-button'>
        {i18n.locales.map((locale, i, array) => {
          const lastElement = array[array.length - 1]
          const isLastElement = array.indexOf(lastElement) === i

          return (
            <li key={locale}>
              <Link
                href={redirectedPathName(locale)}
                onClick={handleCloseMenu}
                onBlur={isLastElement ? handleCloseMenu : undefined}
                className='block rounded p-3 hover:bg-stone-600'
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