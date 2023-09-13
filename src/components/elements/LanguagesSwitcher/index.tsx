import LocaleList from './LocaleList'
import LanguageSwitcherButton from './LanguageSwitcherButton'
import useToggle from '@/hooks/useToggle'

const LanguagesSwitcher = () => {
  const [isLocaleListOpen, handleTogglePopup, setIsLocaleListOpen] = useToggle()

  return (
    <div className='relative'>
      <LanguageSwitcherButton
        isLocaleListOpen={isLocaleListOpen}
        onTogglePopup={handleTogglePopup}
      />

      {
        <LocaleList
          isLocaleListOpen={isLocaleListOpen}
          onClosePopup={() => setIsLocaleListOpen(false)}
        />
      }
    </div>
  )
}
export default LanguagesSwitcher
