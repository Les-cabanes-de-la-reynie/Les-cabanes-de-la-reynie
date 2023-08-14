'use client'

import { useState } from 'react'
import LocaleList from './LocaleList'
import LanguageSwitcherButton from './LanguageSwitcherButton'

const LanguagesSwitcher = () => {
  const [isLocaleListOpen, setIsLocaleListOpen] = useState(false)

  const handleToggleMenu = () => setIsLocaleListOpen(c => !c)
  const handleCloseMenu = () => setIsLocaleListOpen(false)

  return (
    <div className='relative'>
      <LanguageSwitcherButton
        isLocaleListOpen={isLocaleListOpen}
        handleToggleMenu={handleToggleMenu}
      />

      {isLocaleListOpen && (
        <LocaleList
          isLocaleListOpen={isLocaleListOpen}
          handleCloseMenu={handleCloseMenu}
        />
      )}
    </div>
  )
}
export default LanguagesSwitcher
