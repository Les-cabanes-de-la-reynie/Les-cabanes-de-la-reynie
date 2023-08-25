'use client'

import LocaleList from './LocaleList'
import LanguageSwitcherButton from './LanguageSwitcherButton'
import useToggle from '@/hooks/useToggle'

const LanguagesSwitcher = () => {
  const [isLocaleListOpen, handleToggleMenu] = useToggle()

  return (
    <div className='relative'>
      <LanguageSwitcherButton
        isLocaleListOpen={isLocaleListOpen}
        handleToggleMenu={handleToggleMenu}
      />

      {isLocaleListOpen && (
        <LocaleList
          isLocaleListOpen={isLocaleListOpen}
          handleCloseMenu={handleToggleMenu}
        />
      )}
    </div>
  )
}
export default LanguagesSwitcher
